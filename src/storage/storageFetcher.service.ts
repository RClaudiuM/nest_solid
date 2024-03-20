import { Injectable } from '@nestjs/common';

// Dependency Inversion Principle
// The StorageFetcherService abstract class is a contract for all storage fetcher services.

// Depend on abstractions rather than concrete implementations.
//? Loose coupling between components
//? Facilitates easier testing and maintenance

// PROS
/**
Flexibility: DIP promotes loose coupling by abstracting dependencies, allowing for easier substitution of implementations without modifying higher-level modules. This makes the code more flexible and adaptable to changes.

Testability: By depending on abstractions rather than concrete implementations, DIP facilitates easier unit testing and mocking of dependencies. This improves the testability and overall quality of the codebase.

Modularity: DIP helps in breaking down large systems into smaller, more manageable modules with well-defined responsibilities. This modular structure enhances code maintainability and reusability.

Reduced Code Duplication: By promoting the reuse of abstractions and separating concerns, DIP helps in reducing code duplication. Abstractions can be shared across multiple modules, leading to more concise and maintainable code.

Dependency Inversion: DIP promotes a reverse dependency flow, where high-level modules depend on abstractions rather than concrete implementations. This inversion of dependencies improves the overall design and readability of the code.
 */

//! CONS
/**
Complexity: Implementing DIP may introduce additional complexity, especially for simpler applications. Introducing abstractions and dependency injection mechanisms can sometimes overcomplicate the codebase.

Learning Curve: DIP requires developers to understand and follow best practices related to abstractions, interfaces, and dependency injection. This may result in a steeper learning curve for inexperienced developers.

Performance Overhead: In some cases, using abstractions and dependency injection may introduce a slight performance overhead due to the additional indirection involved. However, modern frameworks and tools often mitigate this overhead.

Potential Misuse: Misusing DIP by introducing unnecessary abstractions or injecting too many dependencies can lead to an overly complex and difficult-to-maintain codebase. It's important to strike the right balance and apply DIP judiciously.

Design Overhead: Applying DIP requires careful design decisions to define clear abstractions and manage dependencies effectively. This design overhead may require additional effort and planning upfront.
 */

@Injectable()
export abstract class StorageFetcherService {
  public abstract fetchFile(filename: string): Promise<string>;
}
