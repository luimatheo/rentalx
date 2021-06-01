import { getRepository, Repository } from 'typeorm';

import {
    ICreateISpecificationDTO,
    ISpecificationsRepository,
} from '@modules/cars/repositories/ISpecificationsRepository';

import { Specification } from '../typeorm/entities/Specification';

class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async findByName(name: string): Promise<Specification | undefined> {
        const specification = await this.repository.findOne({
            name,
        });

        return specification;
    }

    async create({
        name,
        description,
    }: ICreateISpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({
            name,
            description,
        });

        await this.repository.save(specification);

        return specification;
    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const specifications = await this.repository.findByIds(ids);

        return specifications;
    }
}

export { SpecificationsRepository };
