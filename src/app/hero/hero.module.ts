import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroRoutingModule } from "./hero-routing.module";
import { HerosComponent } from "./heros/heros.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

// Mission6 Http 更改使用方法
// 安裝 JSON Server
// npm install -g json-server
// mkdir json-server --建立資料夾
// cd json-server  -- 進入資料夾
// 建立 db.json 檔案
// 將 hero 資料寫入
// 建立 routes.json 檔案
// 寫入 API 路徑
// app.module 內的 加入 provider 並加入 { provide: "api", useValue: "http://localhost:3000/api" }
// 在 json-server 內啟動，指令 ->  json-server --watch db.json --routes routes.json

@NgModule({
  declarations: [HerosComponent, HeroDetailComponent, DashboardComponent],
  imports: [
    CommonModule,
    HeroRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class HeroModule {}
