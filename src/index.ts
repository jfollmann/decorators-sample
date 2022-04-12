import { apiVersion, maxLength, minLength } from './decorators';

@apiVersion('1.0.0')
class Api { }

class User { 

  @minLength(3)
  name: string

  @maxLength(10)
  email: string

  constructor(name: string, email: string) { 
    this.name = name
    this.email = email
  }
}

const apiInstance = new Api();
console.log(apiInstance.__version)

const userInstance = new User('Jeff', 'jeff.follmann@gmail.com')
