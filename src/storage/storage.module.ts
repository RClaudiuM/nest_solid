import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { STORAGE_TYPE, StorageType } from './config';
import { CloudStorageService } from './services/cloudStorage.service';
import { LocalStorageService } from './services/localStore.service';

//! Liskov Substitution Principle
//  The principle ensures that subclasses or derived classes can be substituted for their base classes without affecting the program's correctness.

// Basically, design app interfaces, classes and contracts carefully to allow for polymorphism and interchangeable components

// In this example, the StorageModule is designed to provide a StorageService that can be swapped out for different implementations based on the STORAGE_TYPE environment variable.

//? PROS
// Configurability: By configuring the storage service provider based on application settings, you can easily switch between different storage service implementations.
// Dynamic Selection: The chosen storage service can be determined dynamically at runtime, allowing flexibility and adaptability based on changing requirements or conditions.

//! CONS
// Potential Complexity: Configuring service providers based on runtime conditions may introduce complexity, especially in larger applications with multiple dependencies and configurations.
// Dependency on Configuration: Your application's behavior depends on the correctness of the configuration mechanism, which may introduce additional points of failure.

@Module({
  providers: [
    {
      provide: StorageService,
      useClass:
        STORAGE_TYPE === StorageType.CLOUD
          ? CloudStorageService
          : LocalStorageService,
    },
  ],
  exports: [StorageService],
})
export class StorageModule {}
