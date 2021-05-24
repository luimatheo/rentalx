import { Specification } from '../entities/Specification';

interface ICreateISpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    findByName(name: string): Promise<Specification | undefined>;
    create({ name, description }: ICreateISpecificationDTO): Promise<void>;
}

export { ISpecificationsRepository, ICreateISpecificationDTO };
