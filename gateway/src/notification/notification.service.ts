import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface HelloWorldService {
  getHelloWorld(data: any): Observable<any>;
}


@Injectable()
export class NotificationService  implements OnModuleInit{
  private helloWorldService: HelloWorldService;

  constructor(
    @Inject('HELLO_WORLD_SERVICE') private helloWorldClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.helloWorldService = this.helloWorldClient.getService<HelloWorldService>('HelloWorldService');
  }

  getHelloWorld() {
    return this.helloWorldService.getHelloWorld({});
  }
}
