import { PartialType } from '@nestjs/mapped-types';
import { CreateGhatDto } from './create-ghat.dto';

export class UpdateGhatDto extends PartialType(CreateGhatDto) {}
