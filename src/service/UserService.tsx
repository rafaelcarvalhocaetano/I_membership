import axios from 'axios';

class UserService {

  public api: any;

  constructor() {
    this.createConnect();
  }

  private createConnect(): void {
    this.api = axios.create({
      baseURL: 'http://localhost:3030'
    })
  }

}

export default UserService;