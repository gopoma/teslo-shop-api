import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  present() {
    return {
      name: 'teslo-shop',
      version: '1.0.0',
      author: 'gopoma',
    };
  }
}
