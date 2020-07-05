import {Entity, model, property, hasOne, hasMany} from '@loopback/repository';
import {User} from './user.model';
import {PersonSkill} from './person-skill.model';
import {Publication} from './publication.model';

@model()
export class Person extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  code: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  lastname: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
  })
  profilPicPath?: string;

  @hasOne(() => User)
  user: User;

  @hasMany(() => PersonSkill)
  personSkills: PersonSkill[];

  @hasMany(() => Publication)
  publications: Publication[];

  constructor(data?: Partial<Person>) {
    super(data);
  }
}

export interface PersonRelations {
  // describe navigational properties here
}

export type PersonWithRelations = Person & PersonRelations;
