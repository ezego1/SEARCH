import { Injectable } from '@nestjs/common';
import { CreateSearchDto } from './dto/create-search.dto';
import { UpdateSearchDto } from './dto/update-search.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './search.interface';

@Injectable()
export class SearchService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  async findAll(data: any) {
    const { phoneNumber, lastName, firstName, state, jobTitle, statusCode } =
      data;
    const newUser = await this.userModel.create({
      phoneNumber,
      lastName,
      firstName,
      state,
      jobTitle,
      statusCode,
    });
    const result = await newUser.save();
    return result;
  }
}
