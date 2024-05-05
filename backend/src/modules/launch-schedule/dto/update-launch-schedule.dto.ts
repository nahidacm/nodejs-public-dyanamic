import { PartialType } from '@nestjs/mapped-types';
import { CreateLaunchScheduleDto } from './create-launch-schedule.dto';

export class UpdateLaunchScheduleDto extends PartialType(CreateLaunchScheduleDto) {}
