import { PartialType } from '@nestjs/mapped-types';
import { CreateMarineCourteDto } from './create-marine-courte.dto';

export class UpdateMarineCourteDto extends PartialType(CreateMarineCourteDto) {}
