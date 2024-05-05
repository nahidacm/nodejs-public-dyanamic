import { PartialType } from '@nestjs/mapped-types';
import { CreatePassengerTrafficDto } from './create-passenger-traffic.dto';

export class UpdatePassengerTrafficDto extends PartialType(CreatePassengerTrafficDto) {}
