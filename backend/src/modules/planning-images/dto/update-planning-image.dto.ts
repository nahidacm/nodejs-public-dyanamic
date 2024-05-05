import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanningImageDto } from './create-planning-image.dto';

export class UpdatePlanningImageDto extends PartialType(CreatePlanningImageDto) {}
