import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {

  private config:object = {
    showSlider: true,
    name:"",
    userName:"",
  }

  constructor() {
  }


  getConfigData(key:string = ""): object{
    const savedConfig = localStorage.getItem("config")
    if(savedConfig === null){
      return key === ""?this.config:this.config[key];
    }else{
      return key === ""?JSON.parse(savedConfig):JSON.parse(savedConfig)[key];
    }
  }

  setConfigData(value: object): void{
    this.config = {...this.config,...value};
    localStorage.setItem("config",JSON.stringify(this.config));
  }
}
