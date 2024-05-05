import { PartialType } from '@nestjs/mapped-types';
import { CreateHumanResouceDto } from './create-human-resouce.dto';

export class UpdateHumanResouceDto extends PartialType(CreateHumanResouceDto) {}
