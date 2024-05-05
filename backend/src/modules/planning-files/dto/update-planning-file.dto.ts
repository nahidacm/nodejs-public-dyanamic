import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanningFileDto } from './create-planning-file.dto';

export class UpdatePlanningFileDto extends PartialType(CreatePlanningFileDto) {}
