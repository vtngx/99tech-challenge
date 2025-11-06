import { validate } from "class-validator";
import { Request, Response } from "express";
import { AppDataSource } from "../db/ormconfig";
import { Resource } from "../entities/Resource";
import { successResponse, errorResponse } from "../utils/response";
import { CreateResourceDto, UpdateResourceDto } from "../dto/resource.dto";

const repo = AppDataSource.getRepository(Resource);

export const create = async (req: Request, res: Response) => {
  try {
    const dto = Object.assign(new CreateResourceDto(), req.body);
    const errors = await validate(dto);
    if (errors.length > 0) {
      return res.status(400).json({ message: 'Invalid request', errors });
    }
    const resource = repo.create(req.body);
    await repo.save(resource);
    return successResponse(res, resource, "Resource created", 201);
  } catch (err) {
    return errorResponse(res, "Failed to create resource", err);
  }
};

export const list = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    const qb = repo.createQueryBuilder("resource");

    if (name) qb.where("resource.name ILIKE :name", { name: `%${name}%` });

    const data = await qb.getMany();
    return successResponse(res, data, "Resources fetched");
  } catch (err) {
    return errorResponse(res, "Failed to fetch resources", err);
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const resource = await repo.findOneBy({ id });

    if (!resource)
      return errorResponse(res, "Resource not found", null, 404);

    return successResponse(res, resource, "Resource fetched");
  } catch (err) {
    return errorResponse(res, "Failed to get resource", err);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const resource = await repo.findOneBy({ id });

    if (!resource)
      return errorResponse(res, "Resource not found", null, 404);

    const dto = Object.assign(new UpdateResourceDto(), { id, ...req.body });
    const errors = await validate(dto);
    if (errors.length > 0) {
      return res.status(400).json({ message: 'Invalid request', errors });
    }

    repo.merge(resource, req.body);
    const updated = await repo.save(resource);

    return successResponse(res, updated, "Resource updated");
  } catch (err) {
    return errorResponse(res, "Failed to update resource", err);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await repo.delete(id);

    if (result.affected === 0)
      return errorResponse(res, "Resource not found", null, 404);

    return successResponse(res, null, "Resource deleted", 204);
  } catch (err) {
    return errorResponse(res, "Failed to delete resource", err);
  }
};
