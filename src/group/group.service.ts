import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private readonly GroupRepository: Repository<Group>
  ) {}

  // async createGroup(createGroupDto: CreateGroupDto): Promise<Group> {
  //   let newGroup = await this.GroupRepository.create(createGroupDto)
  //   return this.GroupRepository.save(newGroup)
  // }

  findAll(): Promise<Group[]> {
    return this.GroupRepository.find();
  }

  // async findOne(id: any): Promise<Group|any> {
  //   let findGroup = await this.GroupRepository.findOneBy({ id })
  
  //   if (!findGroup)
  //   return new HttpException('Group not found', HttpStatus.NOT_FOUND)
  //   return findGroup;
  // }


  // async update(id: any, updateGroupDto: UpdateGroupDto): Promise<any> {
  //   let findGroup = await this.GroupRepository.findOneBy({ id });
  //   if(!findGroup)
  //   return new HttpException('Group not found', HttpStatus.NOT_FOUND)
  //   return this.GroupRepository.update({ id }, { ...updateGroupDto })
  // }

  // async remove(id: any) {
  //   let findGroup = await this.GroupRepository.findOneBy({ id });
  //   if(!findGroup)
  //   return new HttpException('Group not found', HttpStatus.NOT_FOUND)
  //   return this.GroupRepository.delete( id )
  // }
}
