import { PartialType } from '@nestjs/mapped-types';
import { CreatePortActivityDto } from './create-port-activity.dto';

export class UpdatePortActivityDto extends PartialType(CreatePortActivityDto) {}
