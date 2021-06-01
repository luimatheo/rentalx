import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

interface ICreateISpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    findByName(name: string): Promise<Specification | undefined>;
    create({
        name,
        description,
    }: ICreateISpecificationDTO): Promise<Specification>;
    findByIds(ids: string[]): Promise<Specification[]>;
}

export { ISpecificationsRepository, ICreateISpecificationDTO };
