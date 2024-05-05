import { PartialType } from '@nestjs/mapped-types';
import { CreateLaunchTrafficDto } from './create-launch-traffic.dto';

export class UpdateLaunchTrafficDto extends PartialType(CreateLaunchTrafficDto) {}
