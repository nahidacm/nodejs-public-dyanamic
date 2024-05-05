import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CctvModule } from './modules/cctv/cctv.module';
import { PortModule } from './modules/port/port.module';
import { HumanResoucesModule } from './modules/human-resouces/human-resouces.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { GhatModule } from './modules/ghat/ghat.module';
import { VesselModule } from './modules/vessel/vessel.module';
import { IncomeModule } from './modules/income/income.module';
import { PlanModule } from './modules/plan/plan.module';
import { ExpenseModule } from './modules/expense/expense.module';
import { CpIncomeModule } from './modules/cp_income/cp_income.module';
import { PassengerTrafficModule } from './modules/passenger-traffic/passenger-traffic.module';
import { LaunchTrafficModule } from './modules/launch-traffic/launch-traffic.module';
import { LaunchScheduleModule } from './modules/launch-schedule/launch-schedule.module';
import { AssetsModule } from './modules/assets/assets.module';
import { TicketBookingModule } from './modules/ticket-booking/ticket-booking.module';
import { MarineCourteModule } from './modules/marine-courte/marine-courte.module';
import { PortActivitiesModule } from './modules/port-activities/port-activities.module';
import { PhotoModule } from './modules/photo/photo.module';
import { VideoModule } from './modules/video/video.module';
import { PlanningImagesModule } from './modules/planning-images/planning-images.module';
import { PlanningFilesModule } from './modules/planning-files/planning-files.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CctvModule,
    PortModule,
    HumanResoucesModule,
    GalleryModule,
    GhatModule,
    VesselModule,
    IncomeModule,
    PlanModule,
    ExpenseModule,
    CpIncomeModule,
    PassengerTrafficModule,
    LaunchTrafficModule,
    LaunchScheduleModule,
    AssetsModule,
    TicketBookingModule,
    MarineCourteModule,
    PortActivitiesModule,
    PhotoModule,
    VideoModule,
    PlanningImagesModule,
    PlanningFilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
