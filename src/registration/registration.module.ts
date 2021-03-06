import { Module } from '@nestjs/common'
import { RegistrationController } from './registration.controller'
import { RegistrationService } from './registration.service'
import { UsersModule } from '../users/users.module'
import { OrganizationsModule } from '../organizations/organizations.module'

@Module({
  imports: [UsersModule, OrganizationsModule],
  controllers: [RegistrationController],
  providers: [RegistrationService]
})
export class RegistrationModule {}
