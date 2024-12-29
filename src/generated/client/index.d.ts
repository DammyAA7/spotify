
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Song
 * 
 */
export type Song = $Result.DefaultSelection<Prisma.$SongPayload>
/**
 * Model Recommendations
 * 
 */
export type Recommendations = $Result.DefaultSelection<Prisma.$RecommendationsPayload>
/**
 * Model RecommendationSongs
 * 
 */
export type RecommendationSongs = $Result.DefaultSelection<Prisma.$RecommendationSongsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.song`: Exposes CRUD operations for the **Song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.SongDelegate<ExtArgs>;

  /**
   * `prisma.recommendations`: Exposes CRUD operations for the **Recommendations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommendations
    * const recommendations = await prisma.recommendations.findMany()
    * ```
    */
  get recommendations(): Prisma.RecommendationsDelegate<ExtArgs>;

  /**
   * `prisma.recommendationSongs`: Exposes CRUD operations for the **RecommendationSongs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecommendationSongs
    * const recommendationSongs = await prisma.recommendationSongs.findMany()
    * ```
    */
  get recommendationSongs(): Prisma.RecommendationSongsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Song: 'Song',
    Recommendations: 'Recommendations',
    RecommendationSongs: 'RecommendationSongs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "song" | "recommendations" | "recommendationSongs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Song: {
        payload: Prisma.$SongPayload<ExtArgs>
        fields: Prisma.SongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findFirst: {
            args: Prisma.SongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findMany: {
            args: Prisma.SongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          create: {
            args: Prisma.SongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          createMany: {
            args: Prisma.SongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          delete: {
            args: Prisma.SongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          update: {
            args: Prisma.SongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          deleteMany: {
            args: Prisma.SongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          aggregate: {
            args: Prisma.SongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSong>
          }
          groupBy: {
            args: Prisma.SongGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongCountArgs<ExtArgs>
            result: $Utils.Optional<SongCountAggregateOutputType> | number
          }
        }
      }
      Recommendations: {
        payload: Prisma.$RecommendationsPayload<ExtArgs>
        fields: Prisma.RecommendationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>
          }
          findFirst: {
            args: Prisma.RecommendationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>
          }
          findMany: {
            args: Prisma.RecommendationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>[]
          }
          create: {
            args: Prisma.RecommendationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>
          }
          createMany: {
            args: Prisma.RecommendationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>[]
          }
          delete: {
            args: Prisma.RecommendationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>
          }
          update: {
            args: Prisma.RecommendationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecommendationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationsPayload>
          }
          aggregate: {
            args: Prisma.RecommendationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendations>
          }
          groupBy: {
            args: Prisma.RecommendationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationsCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationsCountAggregateOutputType> | number
          }
        }
      }
      RecommendationSongs: {
        payload: Prisma.$RecommendationSongsPayload<ExtArgs>
        fields: Prisma.RecommendationSongsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationSongsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationSongsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationSongsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationSongsPayload>
          }
          findFirst: {
            args: Prisma.RecommendationSongsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationSongsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationSongsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationSongsPayload>
          }
          findMany: {
            args: Prisma.RecommendationSongsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationSongsPayload>[]
          }
          create: {
            args: Prisma.RecommendationSongsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationSongsPayload>
          }
          createMany: {
            args: Prisma.RecommendationSongsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationSongsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationSongsPayload>[]
          }
          delete: {
            args: Prisma.RecommendationSongsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationSongsPayload>
          }
          update: {
            args: Prisma.RecommendationSongsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationSongsPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationSongsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationSongsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecommendationSongsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationSongsPayload>
          }
          aggregate: {
            args: Prisma.RecommendationSongsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendationSongs>
          }
          groupBy: {
            args: Prisma.RecommendationSongsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationSongsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationSongsCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationSongsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentRecommendations: number
    receivedRecommendations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentRecommendations?: boolean | UserCountOutputTypeCountSentRecommendationsArgs
    receivedRecommendations?: boolean | UserCountOutputTypeCountReceivedRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationsWhereInput
  }


  /**
   * Count Type SongCountOutputType
   */

  export type SongCountOutputType = {
    recommendationSongs: number
  }

  export type SongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommendationSongs?: boolean | SongCountOutputTypeCountRecommendationSongsArgs
  }

  // Custom InputTypes
  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCountOutputType
     */
    select?: SongCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountRecommendationSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationSongsWhereInput
  }


  /**
   * Count Type RecommendationsCountOutputType
   */

  export type RecommendationsCountOutputType = {
    recommendationSongs: number
  }

  export type RecommendationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommendationSongs?: boolean | RecommendationsCountOutputTypeCountRecommendationSongsArgs
  }

  // Custom InputTypes
  /**
   * RecommendationsCountOutputType without action
   */
  export type RecommendationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationsCountOutputType
     */
    select?: RecommendationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecommendationsCountOutputType without action
   */
  export type RecommendationsCountOutputTypeCountRecommendationSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationSongsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    sentRecommendations?: boolean | User$sentRecommendationsArgs<ExtArgs>
    receivedRecommendations?: boolean | User$receivedRecommendationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentRecommendations?: boolean | User$sentRecommendationsArgs<ExtArgs>
    receivedRecommendations?: boolean | User$receivedRecommendationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sentRecommendations: Prisma.$RecommendationsPayload<ExtArgs>[]
      receivedRecommendations: Prisma.$RecommendationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentRecommendations<T extends User$sentRecommendationsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentRecommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "findMany"> | Null>
    receivedRecommendations<T extends User$receivedRecommendationsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedRecommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.sentRecommendations
   */
  export type User$sentRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    where?: RecommendationsWhereInput
    orderBy?: RecommendationsOrderByWithRelationInput | RecommendationsOrderByWithRelationInput[]
    cursor?: RecommendationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationsScalarFieldEnum | RecommendationsScalarFieldEnum[]
  }

  /**
   * User.receivedRecommendations
   */
  export type User$receivedRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    where?: RecommendationsWhereInput
    orderBy?: RecommendationsOrderByWithRelationInput | RecommendationsOrderByWithRelationInput[]
    cursor?: RecommendationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationsScalarFieldEnum | RecommendationsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Song
   */

  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongAvgAggregateOutputType = {
    id: number | null
  }

  export type SongSumAggregateOutputType = {
    id: number | null
  }

  export type SongMinAggregateOutputType = {
    id: number | null
    title: string | null
    artist: string | null
    genre: string | null
  }

  export type SongMaxAggregateOutputType = {
    id: number | null
    title: string | null
    artist: string | null
    genre: string | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    title: number
    artist: number
    genre: number
    _all: number
  }


  export type SongAvgAggregateInputType = {
    id?: true
  }

  export type SongSumAggregateInputType = {
    id?: true
  }

  export type SongMinAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    genre?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    genre?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    genre?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Song to aggregate.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type SongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
    orderBy?: SongOrderByWithAggregationInput | SongOrderByWithAggregationInput[]
    by: SongScalarFieldEnum[] | SongScalarFieldEnum
    having?: SongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _avg?: SongAvgAggregateInputType
    _sum?: SongSumAggregateInputType
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }

  export type SongGroupByOutputType = {
    id: number
    title: string
    artist: string
    genre: string
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type SongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artist?: boolean
    genre?: boolean
    recommendationSongs?: boolean | Song$recommendationSongsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artist?: boolean
    genre?: boolean
  }, ExtArgs["result"]["song"]>

  export type SongSelectScalar = {
    id?: boolean
    title?: boolean
    artist?: boolean
    genre?: boolean
  }

  export type SongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommendationSongs?: boolean | Song$recommendationSongsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SongIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Song"
    objects: {
      recommendationSongs: Prisma.$RecommendationSongsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      artist: string
      genre: string
    }, ExtArgs["result"]["song"]>
    composites: {}
  }

  type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = $Result.GetResult<Prisma.$SongPayload, S>

  type SongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SongFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SongCountAggregateInputType | true
    }

  export interface SongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Song'], meta: { name: 'Song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {SongFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongFindUniqueArgs>(args: SelectSubset<T, SongFindUniqueArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Song that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SongFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs>(args: SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongFindFirstArgs>(args?: SelectSubset<T, SongFindFirstArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs>(args?: SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SongFindManyArgs>(args?: SelectSubset<T, SongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Song.
     * @param {SongCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
     */
    create<T extends SongCreateArgs>(args: SelectSubset<T, SongCreateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Songs.
     * @param {SongCreateManyArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SongCreateManyArgs>(args?: SelectSubset<T, SongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Songs and returns the data saved in the database.
     * @param {SongCreateManyAndReturnArgs} args - Arguments to create many Songs.
     * @example
     * // Create many Songs
     * const song = await prisma.song.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Songs and only return the `id`
     * const songWithIdOnly = await prisma.song.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SongCreateManyAndReturnArgs>(args?: SelectSubset<T, SongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Song.
     * @param {SongDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
     */
    delete<T extends SongDeleteArgs>(args: SelectSubset<T, SongDeleteArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Song.
     * @param {SongUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SongUpdateArgs>(args: SelectSubset<T, SongUpdateArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Songs.
     * @param {SongDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SongDeleteManyArgs>(args?: SelectSubset<T, SongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SongUpdateManyArgs>(args: SelectSubset<T, SongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Song.
     * @param {SongUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
     */
    upsert<T extends SongUpsertArgs>(args: SelectSubset<T, SongUpsertArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongCountArgs>(
      args?: Subset<T, SongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongGroupByArgs['orderBy'] }
        : { orderBy?: SongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Song model
   */
  readonly fields: SongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recommendationSongs<T extends Song$recommendationSongsArgs<ExtArgs> = {}>(args?: Subset<T, Song$recommendationSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationSongsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Song model
   */ 
  interface SongFieldRefs {
    readonly id: FieldRef<"Song", 'Int'>
    readonly title: FieldRef<"Song", 'String'>
    readonly artist: FieldRef<"Song", 'String'>
    readonly genre: FieldRef<"Song", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Song findUnique
   */
  export type SongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findUniqueOrThrow
   */
  export type SongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song findFirst
   */
  export type SongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findFirstOrThrow
   */
  export type SongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song findMany
   */
  export type SongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }

  /**
   * Song create
   */
  export type SongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to create a Song.
     */
    data: XOR<SongCreateInput, SongUncheckedCreateInput>
  }

  /**
   * Song createMany
   */
  export type SongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Song createManyAndReturn
   */
  export type SongCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Song update
   */
  export type SongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to update a Song.
     */
    data: XOR<SongUpdateInput, SongUncheckedUpdateInput>
    /**
     * Choose, which Song to update.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song updateMany
   */
  export type SongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
  }

  /**
   * Song upsert
   */
  export type SongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The filter to search for the Song to update in case it exists.
     */
    where: SongWhereUniqueInput
    /**
     * In case the Song found by the `where` argument doesn't exist, create a new Song with this data.
     */
    create: XOR<SongCreateInput, SongUncheckedCreateInput>
    /**
     * In case the Song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongUpdateInput, SongUncheckedUpdateInput>
  }

  /**
   * Song delete
   */
  export type SongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter which Song to delete.
     */
    where: SongWhereUniqueInput
  }

  /**
   * Song deleteMany
   */
  export type SongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: SongWhereInput
  }

  /**
   * Song.recommendationSongs
   */
  export type Song$recommendationSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationSongs
     */
    select?: RecommendationSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationSongsInclude<ExtArgs> | null
    where?: RecommendationSongsWhereInput
    orderBy?: RecommendationSongsOrderByWithRelationInput | RecommendationSongsOrderByWithRelationInput[]
    cursor?: RecommendationSongsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationSongsScalarFieldEnum | RecommendationSongsScalarFieldEnum[]
  }

  /**
   * Song without action
   */
  export type SongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongInclude<ExtArgs> | null
  }


  /**
   * Model Recommendations
   */

  export type AggregateRecommendations = {
    _count: RecommendationsCountAggregateOutputType | null
    _avg: RecommendationsAvgAggregateOutputType | null
    _sum: RecommendationsSumAggregateOutputType | null
    _min: RecommendationsMinAggregateOutputType | null
    _max: RecommendationsMaxAggregateOutputType | null
  }

  export type RecommendationsAvgAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type RecommendationsSumAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type RecommendationsMinAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
    createdAt: Date | null
  }

  export type RecommendationsMaxAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
    createdAt: Date | null
  }

  export type RecommendationsCountAggregateOutputType = {
    id: number
    fromUserId: number
    toUserId: number
    createdAt: number
    _all: number
  }


  export type RecommendationsAvgAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type RecommendationsSumAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type RecommendationsMinAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    createdAt?: true
  }

  export type RecommendationsMaxAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    createdAt?: true
  }

  export type RecommendationsCountAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    createdAt?: true
    _all?: true
  }

  export type RecommendationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendations to aggregate.
     */
    where?: RecommendationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationsOrderByWithRelationInput | RecommendationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recommendations
    **/
    _count?: true | RecommendationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecommendationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecommendationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationsMaxAggregateInputType
  }

  export type GetRecommendationsAggregateType<T extends RecommendationsAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendations[P]>
      : GetScalarType<T[P], AggregateRecommendations[P]>
  }




  export type RecommendationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationsWhereInput
    orderBy?: RecommendationsOrderByWithAggregationInput | RecommendationsOrderByWithAggregationInput[]
    by: RecommendationsScalarFieldEnum[] | RecommendationsScalarFieldEnum
    having?: RecommendationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationsCountAggregateInputType | true
    _avg?: RecommendationsAvgAggregateInputType
    _sum?: RecommendationsSumAggregateInputType
    _min?: RecommendationsMinAggregateInputType
    _max?: RecommendationsMaxAggregateInputType
  }

  export type RecommendationsGroupByOutputType = {
    id: number
    fromUserId: number
    toUserId: number
    createdAt: Date
    _count: RecommendationsCountAggregateOutputType | null
    _avg: RecommendationsAvgAggregateOutputType | null
    _sum: RecommendationsSumAggregateOutputType | null
    _min: RecommendationsMinAggregateOutputType | null
    _max: RecommendationsMaxAggregateOutputType | null
  }

  type GetRecommendationsGroupByPayload<T extends RecommendationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationsGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationsGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    createdAt?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
    recommendationSongs?: boolean | Recommendations$recommendationSongsArgs<ExtArgs>
    _count?: boolean | RecommendationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendations"]>

  export type RecommendationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    createdAt?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendations"]>

  export type RecommendationsSelectScalar = {
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    createdAt?: boolean
  }

  export type RecommendationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
    recommendationSongs?: boolean | Recommendations$recommendationSongsArgs<ExtArgs>
    _count?: boolean | RecommendationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecommendationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecommendationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recommendations"
    objects: {
      fromUser: Prisma.$UserPayload<ExtArgs>
      toUser: Prisma.$UserPayload<ExtArgs>
      recommendationSongs: Prisma.$RecommendationSongsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fromUserId: number
      toUserId: number
      createdAt: Date
    }, ExtArgs["result"]["recommendations"]>
    composites: {}
  }

  type RecommendationsGetPayload<S extends boolean | null | undefined | RecommendationsDefaultArgs> = $Result.GetResult<Prisma.$RecommendationsPayload, S>

  type RecommendationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecommendationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecommendationsCountAggregateInputType | true
    }

  export interface RecommendationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recommendations'], meta: { name: 'Recommendations' } }
    /**
     * Find zero or one Recommendations that matches the filter.
     * @param {RecommendationsFindUniqueArgs} args - Arguments to find a Recommendations
     * @example
     * // Get one Recommendations
     * const recommendations = await prisma.recommendations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationsFindUniqueArgs>(args: SelectSubset<T, RecommendationsFindUniqueArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Recommendations that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RecommendationsFindUniqueOrThrowArgs} args - Arguments to find a Recommendations
     * @example
     * // Get one Recommendations
     * const recommendations = await prisma.recommendations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationsFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationsFindFirstArgs} args - Arguments to find a Recommendations
     * @example
     * // Get one Recommendations
     * const recommendations = await prisma.recommendations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationsFindFirstArgs>(args?: SelectSubset<T, RecommendationsFindFirstArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Recommendations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationsFindFirstOrThrowArgs} args - Arguments to find a Recommendations
     * @example
     * // Get one Recommendations
     * const recommendations = await prisma.recommendations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationsFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommendations
     * const recommendations = await prisma.recommendations.findMany()
     * 
     * // Get first 10 Recommendations
     * const recommendations = await prisma.recommendations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendationsWithIdOnly = await prisma.recommendations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendationsFindManyArgs>(args?: SelectSubset<T, RecommendationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Recommendations.
     * @param {RecommendationsCreateArgs} args - Arguments to create a Recommendations.
     * @example
     * // Create one Recommendations
     * const Recommendations = await prisma.recommendations.create({
     *   data: {
     *     // ... data to create a Recommendations
     *   }
     * })
     * 
     */
    create<T extends RecommendationsCreateArgs>(args: SelectSubset<T, RecommendationsCreateArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Recommendations.
     * @param {RecommendationsCreateManyArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendations = await prisma.recommendations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationsCreateManyArgs>(args?: SelectSubset<T, RecommendationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recommendations and returns the data saved in the database.
     * @param {RecommendationsCreateManyAndReturnArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendations = await prisma.recommendations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recommendations and only return the `id`
     * const recommendationsWithIdOnly = await prisma.recommendations.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationsCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Recommendations.
     * @param {RecommendationsDeleteArgs} args - Arguments to delete one Recommendations.
     * @example
     * // Delete one Recommendations
     * const Recommendations = await prisma.recommendations.delete({
     *   where: {
     *     // ... filter to delete one Recommendations
     *   }
     * })
     * 
     */
    delete<T extends RecommendationsDeleteArgs>(args: SelectSubset<T, RecommendationsDeleteArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Recommendations.
     * @param {RecommendationsUpdateArgs} args - Arguments to update one Recommendations.
     * @example
     * // Update one Recommendations
     * const recommendations = await prisma.recommendations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationsUpdateArgs>(args: SelectSubset<T, RecommendationsUpdateArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Recommendations.
     * @param {RecommendationsDeleteManyArgs} args - Arguments to filter Recommendations to delete.
     * @example
     * // Delete a few Recommendations
     * const { count } = await prisma.recommendations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationsDeleteManyArgs>(args?: SelectSubset<T, RecommendationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommendations
     * const recommendations = await prisma.recommendations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationsUpdateManyArgs>(args: SelectSubset<T, RecommendationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recommendations.
     * @param {RecommendationsUpsertArgs} args - Arguments to update or create a Recommendations.
     * @example
     * // Update or create a Recommendations
     * const recommendations = await prisma.recommendations.upsert({
     *   create: {
     *     // ... data to create a Recommendations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommendations we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationsUpsertArgs>(args: SelectSubset<T, RecommendationsUpsertArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationsCountArgs} args - Arguments to filter Recommendations to count.
     * @example
     * // Count the number of Recommendations
     * const count = await prisma.recommendations.count({
     *   where: {
     *     // ... the filter for the Recommendations we want to count
     *   }
     * })
    **/
    count<T extends RecommendationsCountArgs>(
      args?: Subset<T, RecommendationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecommendationsAggregateArgs>(args: Subset<T, RecommendationsAggregateArgs>): Prisma.PrismaPromise<GetRecommendationsAggregateType<T>>

    /**
     * Group by Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecommendationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationsGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecommendationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recommendations model
   */
  readonly fields: RecommendationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recommendations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    toUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    recommendationSongs<T extends Recommendations$recommendationSongsArgs<ExtArgs> = {}>(args?: Subset<T, Recommendations$recommendationSongsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationSongsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recommendations model
   */ 
  interface RecommendationsFieldRefs {
    readonly id: FieldRef<"Recommendations", 'Int'>
    readonly fromUserId: FieldRef<"Recommendations", 'Int'>
    readonly toUserId: FieldRef<"Recommendations", 'Int'>
    readonly createdAt: FieldRef<"Recommendations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recommendations findUnique
   */
  export type RecommendationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where: RecommendationsWhereUniqueInput
  }

  /**
   * Recommendations findUniqueOrThrow
   */
  export type RecommendationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where: RecommendationsWhereUniqueInput
  }

  /**
   * Recommendations findFirst
   */
  export type RecommendationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationsOrderByWithRelationInput | RecommendationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationsScalarFieldEnum | RecommendationsScalarFieldEnum[]
  }

  /**
   * Recommendations findFirstOrThrow
   */
  export type RecommendationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationsOrderByWithRelationInput | RecommendationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationsScalarFieldEnum | RecommendationsScalarFieldEnum[]
  }

  /**
   * Recommendations findMany
   */
  export type RecommendationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationsOrderByWithRelationInput | RecommendationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recommendations.
     */
    cursor?: RecommendationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    distinct?: RecommendationsScalarFieldEnum | RecommendationsScalarFieldEnum[]
  }

  /**
   * Recommendations create
   */
  export type RecommendationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Recommendations.
     */
    data: XOR<RecommendationsCreateInput, RecommendationsUncheckedCreateInput>
  }

  /**
   * Recommendations createMany
   */
  export type RecommendationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationsCreateManyInput | RecommendationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recommendations createManyAndReturn
   */
  export type RecommendationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationsCreateManyInput | RecommendationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendations update
   */
  export type RecommendationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Recommendations.
     */
    data: XOR<RecommendationsUpdateInput, RecommendationsUncheckedUpdateInput>
    /**
     * Choose, which Recommendations to update.
     */
    where: RecommendationsWhereUniqueInput
  }

  /**
   * Recommendations updateMany
   */
  export type RecommendationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationsUpdateManyMutationInput, RecommendationsUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationsWhereInput
  }

  /**
   * Recommendations upsert
   */
  export type RecommendationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Recommendations to update in case it exists.
     */
    where: RecommendationsWhereUniqueInput
    /**
     * In case the Recommendations found by the `where` argument doesn't exist, create a new Recommendations with this data.
     */
    create: XOR<RecommendationsCreateInput, RecommendationsUncheckedCreateInput>
    /**
     * In case the Recommendations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationsUpdateInput, RecommendationsUncheckedUpdateInput>
  }

  /**
   * Recommendations delete
   */
  export type RecommendationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
    /**
     * Filter which Recommendations to delete.
     */
    where: RecommendationsWhereUniqueInput
  }

  /**
   * Recommendations deleteMany
   */
  export type RecommendationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendations to delete
     */
    where?: RecommendationsWhereInput
  }

  /**
   * Recommendations.recommendationSongs
   */
  export type Recommendations$recommendationSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationSongs
     */
    select?: RecommendationSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationSongsInclude<ExtArgs> | null
    where?: RecommendationSongsWhereInput
    orderBy?: RecommendationSongsOrderByWithRelationInput | RecommendationSongsOrderByWithRelationInput[]
    cursor?: RecommendationSongsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationSongsScalarFieldEnum | RecommendationSongsScalarFieldEnum[]
  }

  /**
   * Recommendations without action
   */
  export type RecommendationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendations
     */
    select?: RecommendationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationsInclude<ExtArgs> | null
  }


  /**
   * Model RecommendationSongs
   */

  export type AggregateRecommendationSongs = {
    _count: RecommendationSongsCountAggregateOutputType | null
    _avg: RecommendationSongsAvgAggregateOutputType | null
    _sum: RecommendationSongsSumAggregateOutputType | null
    _min: RecommendationSongsMinAggregateOutputType | null
    _max: RecommendationSongsMaxAggregateOutputType | null
  }

  export type RecommendationSongsAvgAggregateOutputType = {
    id: number | null
    recommendationId: number | null
    songId: number | null
  }

  export type RecommendationSongsSumAggregateOutputType = {
    id: number | null
    recommendationId: number | null
    songId: number | null
  }

  export type RecommendationSongsMinAggregateOutputType = {
    id: number | null
    recommendationId: number | null
    songId: number | null
    createdAt: Date | null
  }

  export type RecommendationSongsMaxAggregateOutputType = {
    id: number | null
    recommendationId: number | null
    songId: number | null
    createdAt: Date | null
  }

  export type RecommendationSongsCountAggregateOutputType = {
    id: number
    recommendationId: number
    songId: number
    createdAt: number
    _all: number
  }


  export type RecommendationSongsAvgAggregateInputType = {
    id?: true
    recommendationId?: true
    songId?: true
  }

  export type RecommendationSongsSumAggregateInputType = {
    id?: true
    recommendationId?: true
    songId?: true
  }

  export type RecommendationSongsMinAggregateInputType = {
    id?: true
    recommendationId?: true
    songId?: true
    createdAt?: true
  }

  export type RecommendationSongsMaxAggregateInputType = {
    id?: true
    recommendationId?: true
    songId?: true
    createdAt?: true
  }

  export type RecommendationSongsCountAggregateInputType = {
    id?: true
    recommendationId?: true
    songId?: true
    createdAt?: true
    _all?: true
  }

  export type RecommendationSongsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecommendationSongs to aggregate.
     */
    where?: RecommendationSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationSongs to fetch.
     */
    orderBy?: RecommendationSongsOrderByWithRelationInput | RecommendationSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecommendationSongs
    **/
    _count?: true | RecommendationSongsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecommendationSongsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecommendationSongsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationSongsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationSongsMaxAggregateInputType
  }

  export type GetRecommendationSongsAggregateType<T extends RecommendationSongsAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendationSongs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendationSongs[P]>
      : GetScalarType<T[P], AggregateRecommendationSongs[P]>
  }




  export type RecommendationSongsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationSongsWhereInput
    orderBy?: RecommendationSongsOrderByWithAggregationInput | RecommendationSongsOrderByWithAggregationInput[]
    by: RecommendationSongsScalarFieldEnum[] | RecommendationSongsScalarFieldEnum
    having?: RecommendationSongsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationSongsCountAggregateInputType | true
    _avg?: RecommendationSongsAvgAggregateInputType
    _sum?: RecommendationSongsSumAggregateInputType
    _min?: RecommendationSongsMinAggregateInputType
    _max?: RecommendationSongsMaxAggregateInputType
  }

  export type RecommendationSongsGroupByOutputType = {
    id: number
    recommendationId: number
    songId: number
    createdAt: Date
    _count: RecommendationSongsCountAggregateOutputType | null
    _avg: RecommendationSongsAvgAggregateOutputType | null
    _sum: RecommendationSongsSumAggregateOutputType | null
    _min: RecommendationSongsMinAggregateOutputType | null
    _max: RecommendationSongsMaxAggregateOutputType | null
  }

  type GetRecommendationSongsGroupByPayload<T extends RecommendationSongsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationSongsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationSongsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationSongsGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationSongsGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationSongsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recommendationId?: boolean
    songId?: boolean
    createdAt?: boolean
    recommendation?: boolean | RecommendationsDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendationSongs"]>

  export type RecommendationSongsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recommendationId?: boolean
    songId?: boolean
    createdAt?: boolean
    recommendation?: boolean | RecommendationsDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendationSongs"]>

  export type RecommendationSongsSelectScalar = {
    id?: boolean
    recommendationId?: boolean
    songId?: boolean
    createdAt?: boolean
  }

  export type RecommendationSongsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommendation?: boolean | RecommendationsDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }
  export type RecommendationSongsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommendation?: boolean | RecommendationsDefaultArgs<ExtArgs>
    song?: boolean | SongDefaultArgs<ExtArgs>
  }

  export type $RecommendationSongsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecommendationSongs"
    objects: {
      recommendation: Prisma.$RecommendationsPayload<ExtArgs>
      song: Prisma.$SongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recommendationId: number
      songId: number
      createdAt: Date
    }, ExtArgs["result"]["recommendationSongs"]>
    composites: {}
  }

  type RecommendationSongsGetPayload<S extends boolean | null | undefined | RecommendationSongsDefaultArgs> = $Result.GetResult<Prisma.$RecommendationSongsPayload, S>

  type RecommendationSongsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecommendationSongsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecommendationSongsCountAggregateInputType | true
    }

  export interface RecommendationSongsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecommendationSongs'], meta: { name: 'RecommendationSongs' } }
    /**
     * Find zero or one RecommendationSongs that matches the filter.
     * @param {RecommendationSongsFindUniqueArgs} args - Arguments to find a RecommendationSongs
     * @example
     * // Get one RecommendationSongs
     * const recommendationSongs = await prisma.recommendationSongs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationSongsFindUniqueArgs>(args: SelectSubset<T, RecommendationSongsFindUniqueArgs<ExtArgs>>): Prisma__RecommendationSongsClient<$Result.GetResult<Prisma.$RecommendationSongsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RecommendationSongs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RecommendationSongsFindUniqueOrThrowArgs} args - Arguments to find a RecommendationSongs
     * @example
     * // Get one RecommendationSongs
     * const recommendationSongs = await prisma.recommendationSongs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationSongsFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationSongsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationSongsClient<$Result.GetResult<Prisma.$RecommendationSongsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RecommendationSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationSongsFindFirstArgs} args - Arguments to find a RecommendationSongs
     * @example
     * // Get one RecommendationSongs
     * const recommendationSongs = await prisma.recommendationSongs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationSongsFindFirstArgs>(args?: SelectSubset<T, RecommendationSongsFindFirstArgs<ExtArgs>>): Prisma__RecommendationSongsClient<$Result.GetResult<Prisma.$RecommendationSongsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RecommendationSongs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationSongsFindFirstOrThrowArgs} args - Arguments to find a RecommendationSongs
     * @example
     * // Get one RecommendationSongs
     * const recommendationSongs = await prisma.recommendationSongs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationSongsFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationSongsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationSongsClient<$Result.GetResult<Prisma.$RecommendationSongsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RecommendationSongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationSongsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecommendationSongs
     * const recommendationSongs = await prisma.recommendationSongs.findMany()
     * 
     * // Get first 10 RecommendationSongs
     * const recommendationSongs = await prisma.recommendationSongs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendationSongsWithIdOnly = await prisma.recommendationSongs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendationSongsFindManyArgs>(args?: SelectSubset<T, RecommendationSongsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationSongsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RecommendationSongs.
     * @param {RecommendationSongsCreateArgs} args - Arguments to create a RecommendationSongs.
     * @example
     * // Create one RecommendationSongs
     * const RecommendationSongs = await prisma.recommendationSongs.create({
     *   data: {
     *     // ... data to create a RecommendationSongs
     *   }
     * })
     * 
     */
    create<T extends RecommendationSongsCreateArgs>(args: SelectSubset<T, RecommendationSongsCreateArgs<ExtArgs>>): Prisma__RecommendationSongsClient<$Result.GetResult<Prisma.$RecommendationSongsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RecommendationSongs.
     * @param {RecommendationSongsCreateManyArgs} args - Arguments to create many RecommendationSongs.
     * @example
     * // Create many RecommendationSongs
     * const recommendationSongs = await prisma.recommendationSongs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationSongsCreateManyArgs>(args?: SelectSubset<T, RecommendationSongsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecommendationSongs and returns the data saved in the database.
     * @param {RecommendationSongsCreateManyAndReturnArgs} args - Arguments to create many RecommendationSongs.
     * @example
     * // Create many RecommendationSongs
     * const recommendationSongs = await prisma.recommendationSongs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecommendationSongs and only return the `id`
     * const recommendationSongsWithIdOnly = await prisma.recommendationSongs.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationSongsCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationSongsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationSongsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RecommendationSongs.
     * @param {RecommendationSongsDeleteArgs} args - Arguments to delete one RecommendationSongs.
     * @example
     * // Delete one RecommendationSongs
     * const RecommendationSongs = await prisma.recommendationSongs.delete({
     *   where: {
     *     // ... filter to delete one RecommendationSongs
     *   }
     * })
     * 
     */
    delete<T extends RecommendationSongsDeleteArgs>(args: SelectSubset<T, RecommendationSongsDeleteArgs<ExtArgs>>): Prisma__RecommendationSongsClient<$Result.GetResult<Prisma.$RecommendationSongsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RecommendationSongs.
     * @param {RecommendationSongsUpdateArgs} args - Arguments to update one RecommendationSongs.
     * @example
     * // Update one RecommendationSongs
     * const recommendationSongs = await prisma.recommendationSongs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationSongsUpdateArgs>(args: SelectSubset<T, RecommendationSongsUpdateArgs<ExtArgs>>): Prisma__RecommendationSongsClient<$Result.GetResult<Prisma.$RecommendationSongsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RecommendationSongs.
     * @param {RecommendationSongsDeleteManyArgs} args - Arguments to filter RecommendationSongs to delete.
     * @example
     * // Delete a few RecommendationSongs
     * const { count } = await prisma.recommendationSongs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationSongsDeleteManyArgs>(args?: SelectSubset<T, RecommendationSongsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecommendationSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationSongsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecommendationSongs
     * const recommendationSongs = await prisma.recommendationSongs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationSongsUpdateManyArgs>(args: SelectSubset<T, RecommendationSongsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RecommendationSongs.
     * @param {RecommendationSongsUpsertArgs} args - Arguments to update or create a RecommendationSongs.
     * @example
     * // Update or create a RecommendationSongs
     * const recommendationSongs = await prisma.recommendationSongs.upsert({
     *   create: {
     *     // ... data to create a RecommendationSongs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecommendationSongs we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationSongsUpsertArgs>(args: SelectSubset<T, RecommendationSongsUpsertArgs<ExtArgs>>): Prisma__RecommendationSongsClient<$Result.GetResult<Prisma.$RecommendationSongsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RecommendationSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationSongsCountArgs} args - Arguments to filter RecommendationSongs to count.
     * @example
     * // Count the number of RecommendationSongs
     * const count = await prisma.recommendationSongs.count({
     *   where: {
     *     // ... the filter for the RecommendationSongs we want to count
     *   }
     * })
    **/
    count<T extends RecommendationSongsCountArgs>(
      args?: Subset<T, RecommendationSongsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationSongsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecommendationSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationSongsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecommendationSongsAggregateArgs>(args: Subset<T, RecommendationSongsAggregateArgs>): Prisma.PrismaPromise<GetRecommendationSongsAggregateType<T>>

    /**
     * Group by RecommendationSongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationSongsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecommendationSongsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationSongsGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationSongsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecommendationSongsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationSongsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecommendationSongs model
   */
  readonly fields: RecommendationSongsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecommendationSongs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationSongsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recommendation<T extends RecommendationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecommendationsDefaultArgs<ExtArgs>>): Prisma__RecommendationsClient<$Result.GetResult<Prisma.$RecommendationsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecommendationSongs model
   */ 
  interface RecommendationSongsFieldRefs {
    readonly id: FieldRef<"RecommendationSongs", 'Int'>
    readonly recommendationId: FieldRef<"RecommendationSongs", 'Int'>
    readonly songId: FieldRef<"RecommendationSongs", 'Int'>
    readonly createdAt: FieldRef<"RecommendationSongs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecommendationSongs findUnique
   */
  export type RecommendationSongsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationSongs
     */
    select?: RecommendationSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationSongsInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationSongs to fetch.
     */
    where: RecommendationSongsWhereUniqueInput
  }

  /**
   * RecommendationSongs findUniqueOrThrow
   */
  export type RecommendationSongsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationSongs
     */
    select?: RecommendationSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationSongsInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationSongs to fetch.
     */
    where: RecommendationSongsWhereUniqueInput
  }

  /**
   * RecommendationSongs findFirst
   */
  export type RecommendationSongsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationSongs
     */
    select?: RecommendationSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationSongsInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationSongs to fetch.
     */
    where?: RecommendationSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationSongs to fetch.
     */
    orderBy?: RecommendationSongsOrderByWithRelationInput | RecommendationSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecommendationSongs.
     */
    cursor?: RecommendationSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecommendationSongs.
     */
    distinct?: RecommendationSongsScalarFieldEnum | RecommendationSongsScalarFieldEnum[]
  }

  /**
   * RecommendationSongs findFirstOrThrow
   */
  export type RecommendationSongsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationSongs
     */
    select?: RecommendationSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationSongsInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationSongs to fetch.
     */
    where?: RecommendationSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationSongs to fetch.
     */
    orderBy?: RecommendationSongsOrderByWithRelationInput | RecommendationSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecommendationSongs.
     */
    cursor?: RecommendationSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationSongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecommendationSongs.
     */
    distinct?: RecommendationSongsScalarFieldEnum | RecommendationSongsScalarFieldEnum[]
  }

  /**
   * RecommendationSongs findMany
   */
  export type RecommendationSongsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationSongs
     */
    select?: RecommendationSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationSongsInclude<ExtArgs> | null
    /**
     * Filter, which RecommendationSongs to fetch.
     */
    where?: RecommendationSongsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecommendationSongs to fetch.
     */
    orderBy?: RecommendationSongsOrderByWithRelationInput | RecommendationSongsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecommendationSongs.
     */
    cursor?: RecommendationSongsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecommendationSongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecommendationSongs.
     */
    skip?: number
    distinct?: RecommendationSongsScalarFieldEnum | RecommendationSongsScalarFieldEnum[]
  }

  /**
   * RecommendationSongs create
   */
  export type RecommendationSongsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationSongs
     */
    select?: RecommendationSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationSongsInclude<ExtArgs> | null
    /**
     * The data needed to create a RecommendationSongs.
     */
    data: XOR<RecommendationSongsCreateInput, RecommendationSongsUncheckedCreateInput>
  }

  /**
   * RecommendationSongs createMany
   */
  export type RecommendationSongsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecommendationSongs.
     */
    data: RecommendationSongsCreateManyInput | RecommendationSongsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecommendationSongs createManyAndReturn
   */
  export type RecommendationSongsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationSongs
     */
    select?: RecommendationSongsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RecommendationSongs.
     */
    data: RecommendationSongsCreateManyInput | RecommendationSongsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationSongsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecommendationSongs update
   */
  export type RecommendationSongsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationSongs
     */
    select?: RecommendationSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationSongsInclude<ExtArgs> | null
    /**
     * The data needed to update a RecommendationSongs.
     */
    data: XOR<RecommendationSongsUpdateInput, RecommendationSongsUncheckedUpdateInput>
    /**
     * Choose, which RecommendationSongs to update.
     */
    where: RecommendationSongsWhereUniqueInput
  }

  /**
   * RecommendationSongs updateMany
   */
  export type RecommendationSongsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecommendationSongs.
     */
    data: XOR<RecommendationSongsUpdateManyMutationInput, RecommendationSongsUncheckedUpdateManyInput>
    /**
     * Filter which RecommendationSongs to update
     */
    where?: RecommendationSongsWhereInput
  }

  /**
   * RecommendationSongs upsert
   */
  export type RecommendationSongsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationSongs
     */
    select?: RecommendationSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationSongsInclude<ExtArgs> | null
    /**
     * The filter to search for the RecommendationSongs to update in case it exists.
     */
    where: RecommendationSongsWhereUniqueInput
    /**
     * In case the RecommendationSongs found by the `where` argument doesn't exist, create a new RecommendationSongs with this data.
     */
    create: XOR<RecommendationSongsCreateInput, RecommendationSongsUncheckedCreateInput>
    /**
     * In case the RecommendationSongs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationSongsUpdateInput, RecommendationSongsUncheckedUpdateInput>
  }

  /**
   * RecommendationSongs delete
   */
  export type RecommendationSongsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationSongs
     */
    select?: RecommendationSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationSongsInclude<ExtArgs> | null
    /**
     * Filter which RecommendationSongs to delete.
     */
    where: RecommendationSongsWhereUniqueInput
  }

  /**
   * RecommendationSongs deleteMany
   */
  export type RecommendationSongsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecommendationSongs to delete
     */
    where?: RecommendationSongsWhereInput
  }

  /**
   * RecommendationSongs without action
   */
  export type RecommendationSongsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecommendationSongs
     */
    select?: RecommendationSongsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationSongsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SongScalarFieldEnum: {
    id: 'id',
    title: 'title',
    artist: 'artist',
    genre: 'genre'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const RecommendationsScalarFieldEnum: {
    id: 'id',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    createdAt: 'createdAt'
  };

  export type RecommendationsScalarFieldEnum = (typeof RecommendationsScalarFieldEnum)[keyof typeof RecommendationsScalarFieldEnum]


  export const RecommendationSongsScalarFieldEnum: {
    id: 'id',
    recommendationId: 'recommendationId',
    songId: 'songId',
    createdAt: 'createdAt'
  };

  export type RecommendationSongsScalarFieldEnum = (typeof RecommendationSongsScalarFieldEnum)[keyof typeof RecommendationSongsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    sentRecommendations?: RecommendationsListRelationFilter
    receivedRecommendations?: RecommendationsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    sentRecommendations?: RecommendationsOrderByRelationAggregateInput
    receivedRecommendations?: RecommendationsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    sentRecommendations?: RecommendationsListRelationFilter
    receivedRecommendations?: RecommendationsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SongWhereInput = {
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    id?: IntFilter<"Song"> | number
    title?: StringFilter<"Song"> | string
    artist?: StringFilter<"Song"> | string
    genre?: StringFilter<"Song"> | string
    recommendationSongs?: RecommendationSongsListRelationFilter
  }

  export type SongOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    genre?: SortOrder
    recommendationSongs?: RecommendationSongsOrderByRelationAggregateInput
  }

  export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    title?: StringFilter<"Song"> | string
    artist?: StringFilter<"Song"> | string
    genre?: StringFilter<"Song"> | string
    recommendationSongs?: RecommendationSongsListRelationFilter
  }, "id">

  export type SongOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    genre?: SortOrder
    _count?: SongCountOrderByAggregateInput
    _avg?: SongAvgOrderByAggregateInput
    _max?: SongMaxOrderByAggregateInput
    _min?: SongMinOrderByAggregateInput
    _sum?: SongSumOrderByAggregateInput
  }

  export type SongScalarWhereWithAggregatesInput = {
    AND?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    OR?: SongScalarWhereWithAggregatesInput[]
    NOT?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Song"> | number
    title?: StringWithAggregatesFilter<"Song"> | string
    artist?: StringWithAggregatesFilter<"Song"> | string
    genre?: StringWithAggregatesFilter<"Song"> | string
  }

  export type RecommendationsWhereInput = {
    AND?: RecommendationsWhereInput | RecommendationsWhereInput[]
    OR?: RecommendationsWhereInput[]
    NOT?: RecommendationsWhereInput | RecommendationsWhereInput[]
    id?: IntFilter<"Recommendations"> | number
    fromUserId?: IntFilter<"Recommendations"> | number
    toUserId?: IntFilter<"Recommendations"> | number
    createdAt?: DateTimeFilter<"Recommendations"> | Date | string
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    recommendationSongs?: RecommendationSongsListRelationFilter
  }

  export type RecommendationsOrderByWithRelationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    fromUser?: UserOrderByWithRelationInput
    toUser?: UserOrderByWithRelationInput
    recommendationSongs?: RecommendationSongsOrderByRelationAggregateInput
  }

  export type RecommendationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecommendationsWhereInput | RecommendationsWhereInput[]
    OR?: RecommendationsWhereInput[]
    NOT?: RecommendationsWhereInput | RecommendationsWhereInput[]
    fromUserId?: IntFilter<"Recommendations"> | number
    toUserId?: IntFilter<"Recommendations"> | number
    createdAt?: DateTimeFilter<"Recommendations"> | Date | string
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    recommendationSongs?: RecommendationSongsListRelationFilter
  }, "id">

  export type RecommendationsOrderByWithAggregationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    _count?: RecommendationsCountOrderByAggregateInput
    _avg?: RecommendationsAvgOrderByAggregateInput
    _max?: RecommendationsMaxOrderByAggregateInput
    _min?: RecommendationsMinOrderByAggregateInput
    _sum?: RecommendationsSumOrderByAggregateInput
  }

  export type RecommendationsScalarWhereWithAggregatesInput = {
    AND?: RecommendationsScalarWhereWithAggregatesInput | RecommendationsScalarWhereWithAggregatesInput[]
    OR?: RecommendationsScalarWhereWithAggregatesInput[]
    NOT?: RecommendationsScalarWhereWithAggregatesInput | RecommendationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recommendations"> | number
    fromUserId?: IntWithAggregatesFilter<"Recommendations"> | number
    toUserId?: IntWithAggregatesFilter<"Recommendations"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Recommendations"> | Date | string
  }

  export type RecommendationSongsWhereInput = {
    AND?: RecommendationSongsWhereInput | RecommendationSongsWhereInput[]
    OR?: RecommendationSongsWhereInput[]
    NOT?: RecommendationSongsWhereInput | RecommendationSongsWhereInput[]
    id?: IntFilter<"RecommendationSongs"> | number
    recommendationId?: IntFilter<"RecommendationSongs"> | number
    songId?: IntFilter<"RecommendationSongs"> | number
    createdAt?: DateTimeFilter<"RecommendationSongs"> | Date | string
    recommendation?: XOR<RecommendationsScalarRelationFilter, RecommendationsWhereInput>
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }

  export type RecommendationSongsOrderByWithRelationInput = {
    id?: SortOrder
    recommendationId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    recommendation?: RecommendationsOrderByWithRelationInput
    song?: SongOrderByWithRelationInput
  }

  export type RecommendationSongsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecommendationSongsWhereInput | RecommendationSongsWhereInput[]
    OR?: RecommendationSongsWhereInput[]
    NOT?: RecommendationSongsWhereInput | RecommendationSongsWhereInput[]
    recommendationId?: IntFilter<"RecommendationSongs"> | number
    songId?: IntFilter<"RecommendationSongs"> | number
    createdAt?: DateTimeFilter<"RecommendationSongs"> | Date | string
    recommendation?: XOR<RecommendationsScalarRelationFilter, RecommendationsWhereInput>
    song?: XOR<SongScalarRelationFilter, SongWhereInput>
  }, "id">

  export type RecommendationSongsOrderByWithAggregationInput = {
    id?: SortOrder
    recommendationId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
    _count?: RecommendationSongsCountOrderByAggregateInput
    _avg?: RecommendationSongsAvgOrderByAggregateInput
    _max?: RecommendationSongsMaxOrderByAggregateInput
    _min?: RecommendationSongsMinOrderByAggregateInput
    _sum?: RecommendationSongsSumOrderByAggregateInput
  }

  export type RecommendationSongsScalarWhereWithAggregatesInput = {
    AND?: RecommendationSongsScalarWhereWithAggregatesInput | RecommendationSongsScalarWhereWithAggregatesInput[]
    OR?: RecommendationSongsScalarWhereWithAggregatesInput[]
    NOT?: RecommendationSongsScalarWhereWithAggregatesInput | RecommendationSongsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RecommendationSongs"> | number
    recommendationId?: IntWithAggregatesFilter<"RecommendationSongs"> | number
    songId?: IntWithAggregatesFilter<"RecommendationSongs"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RecommendationSongs"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name: string
    createdAt?: Date | string
    sentRecommendations?: RecommendationsCreateNestedManyWithoutFromUserInput
    receivedRecommendations?: RecommendationsCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    createdAt?: Date | string
    sentRecommendations?: RecommendationsUncheckedCreateNestedManyWithoutFromUserInput
    receivedRecommendations?: RecommendationsUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentRecommendations?: RecommendationsUpdateManyWithoutFromUserNestedInput
    receivedRecommendations?: RecommendationsUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentRecommendations?: RecommendationsUncheckedUpdateManyWithoutFromUserNestedInput
    receivedRecommendations?: RecommendationsUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCreateInput = {
    title: string
    artist: string
    genre: string
    recommendationSongs?: RecommendationSongsCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateInput = {
    id?: number
    title: string
    artist: string
    genre: string
    recommendationSongs?: RecommendationSongsUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    recommendationSongs?: RecommendationSongsUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    recommendationSongs?: RecommendationSongsUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongCreateManyInput = {
    id?: number
    title: string
    artist: string
    genre: string
  }

  export type SongUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
  }

  export type SongUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
  }

  export type RecommendationsCreateInput = {
    createdAt?: Date | string
    fromUser: UserCreateNestedOneWithoutSentRecommendationsInput
    toUser: UserCreateNestedOneWithoutReceivedRecommendationsInput
    recommendationSongs?: RecommendationSongsCreateNestedManyWithoutRecommendationInput
  }

  export type RecommendationsUncheckedCreateInput = {
    id?: number
    fromUserId: number
    toUserId: number
    createdAt?: Date | string
    recommendationSongs?: RecommendationSongsUncheckedCreateNestedManyWithoutRecommendationInput
  }

  export type RecommendationsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutSentRecommendationsNestedInput
    toUser?: UserUpdateOneRequiredWithoutReceivedRecommendationsNestedInput
    recommendationSongs?: RecommendationSongsUpdateManyWithoutRecommendationNestedInput
  }

  export type RecommendationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendationSongs?: RecommendationSongsUncheckedUpdateManyWithoutRecommendationNestedInput
  }

  export type RecommendationsCreateManyInput = {
    id?: number
    fromUserId: number
    toUserId: number
    createdAt?: Date | string
  }

  export type RecommendationsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationSongsCreateInput = {
    createdAt?: Date | string
    recommendation: RecommendationsCreateNestedOneWithoutRecommendationSongsInput
    song: SongCreateNestedOneWithoutRecommendationSongsInput
  }

  export type RecommendationSongsUncheckedCreateInput = {
    id?: number
    recommendationId: number
    songId: number
    createdAt?: Date | string
  }

  export type RecommendationSongsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendation?: RecommendationsUpdateOneRequiredWithoutRecommendationSongsNestedInput
    song?: SongUpdateOneRequiredWithoutRecommendationSongsNestedInput
  }

  export type RecommendationSongsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recommendationId?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationSongsCreateManyInput = {
    id?: number
    recommendationId: number
    songId: number
    createdAt?: Date | string
  }

  export type RecommendationSongsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationSongsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recommendationId?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RecommendationsListRelationFilter = {
    every?: RecommendationsWhereInput
    some?: RecommendationsWhereInput
    none?: RecommendationsWhereInput
  }

  export type RecommendationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RecommendationSongsListRelationFilter = {
    every?: RecommendationSongsWhereInput
    some?: RecommendationSongsWhereInput
    none?: RecommendationSongsWhereInput
  }

  export type RecommendationSongsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    genre?: SortOrder
  }

  export type SongAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SongMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    genre?: SortOrder
  }

  export type SongMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    genre?: SortOrder
  }

  export type SongSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RecommendationsCountOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationsAvgOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type RecommendationsMaxOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationsMinOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationsSumOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type RecommendationsScalarRelationFilter = {
    is?: RecommendationsWhereInput
    isNot?: RecommendationsWhereInput
  }

  export type SongScalarRelationFilter = {
    is?: SongWhereInput
    isNot?: SongWhereInput
  }

  export type RecommendationSongsCountOrderByAggregateInput = {
    id?: SortOrder
    recommendationId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationSongsAvgOrderByAggregateInput = {
    id?: SortOrder
    recommendationId?: SortOrder
    songId?: SortOrder
  }

  export type RecommendationSongsMaxOrderByAggregateInput = {
    id?: SortOrder
    recommendationId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationSongsMinOrderByAggregateInput = {
    id?: SortOrder
    recommendationId?: SortOrder
    songId?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendationSongsSumOrderByAggregateInput = {
    id?: SortOrder
    recommendationId?: SortOrder
    songId?: SortOrder
  }

  export type RecommendationsCreateNestedManyWithoutFromUserInput = {
    create?: XOR<RecommendationsCreateWithoutFromUserInput, RecommendationsUncheckedCreateWithoutFromUserInput> | RecommendationsCreateWithoutFromUserInput[] | RecommendationsUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutFromUserInput | RecommendationsCreateOrConnectWithoutFromUserInput[]
    createMany?: RecommendationsCreateManyFromUserInputEnvelope
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
  }

  export type RecommendationsCreateNestedManyWithoutToUserInput = {
    create?: XOR<RecommendationsCreateWithoutToUserInput, RecommendationsUncheckedCreateWithoutToUserInput> | RecommendationsCreateWithoutToUserInput[] | RecommendationsUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutToUserInput | RecommendationsCreateOrConnectWithoutToUserInput[]
    createMany?: RecommendationsCreateManyToUserInputEnvelope
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
  }

  export type RecommendationsUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<RecommendationsCreateWithoutFromUserInput, RecommendationsUncheckedCreateWithoutFromUserInput> | RecommendationsCreateWithoutFromUserInput[] | RecommendationsUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutFromUserInput | RecommendationsCreateOrConnectWithoutFromUserInput[]
    createMany?: RecommendationsCreateManyFromUserInputEnvelope
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
  }

  export type RecommendationsUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<RecommendationsCreateWithoutToUserInput, RecommendationsUncheckedCreateWithoutToUserInput> | RecommendationsCreateWithoutToUserInput[] | RecommendationsUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutToUserInput | RecommendationsCreateOrConnectWithoutToUserInput[]
    createMany?: RecommendationsCreateManyToUserInputEnvelope
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RecommendationsUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<RecommendationsCreateWithoutFromUserInput, RecommendationsUncheckedCreateWithoutFromUserInput> | RecommendationsCreateWithoutFromUserInput[] | RecommendationsUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutFromUserInput | RecommendationsCreateOrConnectWithoutFromUserInput[]
    upsert?: RecommendationsUpsertWithWhereUniqueWithoutFromUserInput | RecommendationsUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: RecommendationsCreateManyFromUserInputEnvelope
    set?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    disconnect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    delete?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    update?: RecommendationsUpdateWithWhereUniqueWithoutFromUserInput | RecommendationsUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: RecommendationsUpdateManyWithWhereWithoutFromUserInput | RecommendationsUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: RecommendationsScalarWhereInput | RecommendationsScalarWhereInput[]
  }

  export type RecommendationsUpdateManyWithoutToUserNestedInput = {
    create?: XOR<RecommendationsCreateWithoutToUserInput, RecommendationsUncheckedCreateWithoutToUserInput> | RecommendationsCreateWithoutToUserInput[] | RecommendationsUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutToUserInput | RecommendationsCreateOrConnectWithoutToUserInput[]
    upsert?: RecommendationsUpsertWithWhereUniqueWithoutToUserInput | RecommendationsUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: RecommendationsCreateManyToUserInputEnvelope
    set?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    disconnect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    delete?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    update?: RecommendationsUpdateWithWhereUniqueWithoutToUserInput | RecommendationsUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: RecommendationsUpdateManyWithWhereWithoutToUserInput | RecommendationsUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: RecommendationsScalarWhereInput | RecommendationsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecommendationsUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<RecommendationsCreateWithoutFromUserInput, RecommendationsUncheckedCreateWithoutFromUserInput> | RecommendationsCreateWithoutFromUserInput[] | RecommendationsUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutFromUserInput | RecommendationsCreateOrConnectWithoutFromUserInput[]
    upsert?: RecommendationsUpsertWithWhereUniqueWithoutFromUserInput | RecommendationsUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: RecommendationsCreateManyFromUserInputEnvelope
    set?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    disconnect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    delete?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    update?: RecommendationsUpdateWithWhereUniqueWithoutFromUserInput | RecommendationsUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: RecommendationsUpdateManyWithWhereWithoutFromUserInput | RecommendationsUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: RecommendationsScalarWhereInput | RecommendationsScalarWhereInput[]
  }

  export type RecommendationsUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<RecommendationsCreateWithoutToUserInput, RecommendationsUncheckedCreateWithoutToUserInput> | RecommendationsCreateWithoutToUserInput[] | RecommendationsUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: RecommendationsCreateOrConnectWithoutToUserInput | RecommendationsCreateOrConnectWithoutToUserInput[]
    upsert?: RecommendationsUpsertWithWhereUniqueWithoutToUserInput | RecommendationsUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: RecommendationsCreateManyToUserInputEnvelope
    set?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    disconnect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    delete?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    connect?: RecommendationsWhereUniqueInput | RecommendationsWhereUniqueInput[]
    update?: RecommendationsUpdateWithWhereUniqueWithoutToUserInput | RecommendationsUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: RecommendationsUpdateManyWithWhereWithoutToUserInput | RecommendationsUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: RecommendationsScalarWhereInput | RecommendationsScalarWhereInput[]
  }

  export type RecommendationSongsCreateNestedManyWithoutSongInput = {
    create?: XOR<RecommendationSongsCreateWithoutSongInput, RecommendationSongsUncheckedCreateWithoutSongInput> | RecommendationSongsCreateWithoutSongInput[] | RecommendationSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: RecommendationSongsCreateOrConnectWithoutSongInput | RecommendationSongsCreateOrConnectWithoutSongInput[]
    createMany?: RecommendationSongsCreateManySongInputEnvelope
    connect?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
  }

  export type RecommendationSongsUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<RecommendationSongsCreateWithoutSongInput, RecommendationSongsUncheckedCreateWithoutSongInput> | RecommendationSongsCreateWithoutSongInput[] | RecommendationSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: RecommendationSongsCreateOrConnectWithoutSongInput | RecommendationSongsCreateOrConnectWithoutSongInput[]
    createMany?: RecommendationSongsCreateManySongInputEnvelope
    connect?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
  }

  export type RecommendationSongsUpdateManyWithoutSongNestedInput = {
    create?: XOR<RecommendationSongsCreateWithoutSongInput, RecommendationSongsUncheckedCreateWithoutSongInput> | RecommendationSongsCreateWithoutSongInput[] | RecommendationSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: RecommendationSongsCreateOrConnectWithoutSongInput | RecommendationSongsCreateOrConnectWithoutSongInput[]
    upsert?: RecommendationSongsUpsertWithWhereUniqueWithoutSongInput | RecommendationSongsUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: RecommendationSongsCreateManySongInputEnvelope
    set?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    disconnect?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    delete?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    connect?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    update?: RecommendationSongsUpdateWithWhereUniqueWithoutSongInput | RecommendationSongsUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: RecommendationSongsUpdateManyWithWhereWithoutSongInput | RecommendationSongsUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: RecommendationSongsScalarWhereInput | RecommendationSongsScalarWhereInput[]
  }

  export type RecommendationSongsUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<RecommendationSongsCreateWithoutSongInput, RecommendationSongsUncheckedCreateWithoutSongInput> | RecommendationSongsCreateWithoutSongInput[] | RecommendationSongsUncheckedCreateWithoutSongInput[]
    connectOrCreate?: RecommendationSongsCreateOrConnectWithoutSongInput | RecommendationSongsCreateOrConnectWithoutSongInput[]
    upsert?: RecommendationSongsUpsertWithWhereUniqueWithoutSongInput | RecommendationSongsUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: RecommendationSongsCreateManySongInputEnvelope
    set?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    disconnect?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    delete?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    connect?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    update?: RecommendationSongsUpdateWithWhereUniqueWithoutSongInput | RecommendationSongsUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: RecommendationSongsUpdateManyWithWhereWithoutSongInput | RecommendationSongsUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: RecommendationSongsScalarWhereInput | RecommendationSongsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentRecommendationsInput = {
    create?: XOR<UserCreateWithoutSentRecommendationsInput, UserUncheckedCreateWithoutSentRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRecommendationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedRecommendationsInput = {
    create?: XOR<UserCreateWithoutReceivedRecommendationsInput, UserUncheckedCreateWithoutReceivedRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRecommendationsInput
    connect?: UserWhereUniqueInput
  }

  export type RecommendationSongsCreateNestedManyWithoutRecommendationInput = {
    create?: XOR<RecommendationSongsCreateWithoutRecommendationInput, RecommendationSongsUncheckedCreateWithoutRecommendationInput> | RecommendationSongsCreateWithoutRecommendationInput[] | RecommendationSongsUncheckedCreateWithoutRecommendationInput[]
    connectOrCreate?: RecommendationSongsCreateOrConnectWithoutRecommendationInput | RecommendationSongsCreateOrConnectWithoutRecommendationInput[]
    createMany?: RecommendationSongsCreateManyRecommendationInputEnvelope
    connect?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
  }

  export type RecommendationSongsUncheckedCreateNestedManyWithoutRecommendationInput = {
    create?: XOR<RecommendationSongsCreateWithoutRecommendationInput, RecommendationSongsUncheckedCreateWithoutRecommendationInput> | RecommendationSongsCreateWithoutRecommendationInput[] | RecommendationSongsUncheckedCreateWithoutRecommendationInput[]
    connectOrCreate?: RecommendationSongsCreateOrConnectWithoutRecommendationInput | RecommendationSongsCreateOrConnectWithoutRecommendationInput[]
    createMany?: RecommendationSongsCreateManyRecommendationInputEnvelope
    connect?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSentRecommendationsNestedInput = {
    create?: XOR<UserCreateWithoutSentRecommendationsInput, UserUncheckedCreateWithoutSentRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRecommendationsInput
    upsert?: UserUpsertWithoutSentRecommendationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentRecommendationsInput, UserUpdateWithoutSentRecommendationsInput>, UserUncheckedUpdateWithoutSentRecommendationsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedRecommendationsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedRecommendationsInput, UserUncheckedCreateWithoutReceivedRecommendationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRecommendationsInput
    upsert?: UserUpsertWithoutReceivedRecommendationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedRecommendationsInput, UserUpdateWithoutReceivedRecommendationsInput>, UserUncheckedUpdateWithoutReceivedRecommendationsInput>
  }

  export type RecommendationSongsUpdateManyWithoutRecommendationNestedInput = {
    create?: XOR<RecommendationSongsCreateWithoutRecommendationInput, RecommendationSongsUncheckedCreateWithoutRecommendationInput> | RecommendationSongsCreateWithoutRecommendationInput[] | RecommendationSongsUncheckedCreateWithoutRecommendationInput[]
    connectOrCreate?: RecommendationSongsCreateOrConnectWithoutRecommendationInput | RecommendationSongsCreateOrConnectWithoutRecommendationInput[]
    upsert?: RecommendationSongsUpsertWithWhereUniqueWithoutRecommendationInput | RecommendationSongsUpsertWithWhereUniqueWithoutRecommendationInput[]
    createMany?: RecommendationSongsCreateManyRecommendationInputEnvelope
    set?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    disconnect?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    delete?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    connect?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    update?: RecommendationSongsUpdateWithWhereUniqueWithoutRecommendationInput | RecommendationSongsUpdateWithWhereUniqueWithoutRecommendationInput[]
    updateMany?: RecommendationSongsUpdateManyWithWhereWithoutRecommendationInput | RecommendationSongsUpdateManyWithWhereWithoutRecommendationInput[]
    deleteMany?: RecommendationSongsScalarWhereInput | RecommendationSongsScalarWhereInput[]
  }

  export type RecommendationSongsUncheckedUpdateManyWithoutRecommendationNestedInput = {
    create?: XOR<RecommendationSongsCreateWithoutRecommendationInput, RecommendationSongsUncheckedCreateWithoutRecommendationInput> | RecommendationSongsCreateWithoutRecommendationInput[] | RecommendationSongsUncheckedCreateWithoutRecommendationInput[]
    connectOrCreate?: RecommendationSongsCreateOrConnectWithoutRecommendationInput | RecommendationSongsCreateOrConnectWithoutRecommendationInput[]
    upsert?: RecommendationSongsUpsertWithWhereUniqueWithoutRecommendationInput | RecommendationSongsUpsertWithWhereUniqueWithoutRecommendationInput[]
    createMany?: RecommendationSongsCreateManyRecommendationInputEnvelope
    set?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    disconnect?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    delete?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    connect?: RecommendationSongsWhereUniqueInput | RecommendationSongsWhereUniqueInput[]
    update?: RecommendationSongsUpdateWithWhereUniqueWithoutRecommendationInput | RecommendationSongsUpdateWithWhereUniqueWithoutRecommendationInput[]
    updateMany?: RecommendationSongsUpdateManyWithWhereWithoutRecommendationInput | RecommendationSongsUpdateManyWithWhereWithoutRecommendationInput[]
    deleteMany?: RecommendationSongsScalarWhereInput | RecommendationSongsScalarWhereInput[]
  }

  export type RecommendationsCreateNestedOneWithoutRecommendationSongsInput = {
    create?: XOR<RecommendationsCreateWithoutRecommendationSongsInput, RecommendationsUncheckedCreateWithoutRecommendationSongsInput>
    connectOrCreate?: RecommendationsCreateOrConnectWithoutRecommendationSongsInput
    connect?: RecommendationsWhereUniqueInput
  }

  export type SongCreateNestedOneWithoutRecommendationSongsInput = {
    create?: XOR<SongCreateWithoutRecommendationSongsInput, SongUncheckedCreateWithoutRecommendationSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutRecommendationSongsInput
    connect?: SongWhereUniqueInput
  }

  export type RecommendationsUpdateOneRequiredWithoutRecommendationSongsNestedInput = {
    create?: XOR<RecommendationsCreateWithoutRecommendationSongsInput, RecommendationsUncheckedCreateWithoutRecommendationSongsInput>
    connectOrCreate?: RecommendationsCreateOrConnectWithoutRecommendationSongsInput
    upsert?: RecommendationsUpsertWithoutRecommendationSongsInput
    connect?: RecommendationsWhereUniqueInput
    update?: XOR<XOR<RecommendationsUpdateToOneWithWhereWithoutRecommendationSongsInput, RecommendationsUpdateWithoutRecommendationSongsInput>, RecommendationsUncheckedUpdateWithoutRecommendationSongsInput>
  }

  export type SongUpdateOneRequiredWithoutRecommendationSongsNestedInput = {
    create?: XOR<SongCreateWithoutRecommendationSongsInput, SongUncheckedCreateWithoutRecommendationSongsInput>
    connectOrCreate?: SongCreateOrConnectWithoutRecommendationSongsInput
    upsert?: SongUpsertWithoutRecommendationSongsInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutRecommendationSongsInput, SongUpdateWithoutRecommendationSongsInput>, SongUncheckedUpdateWithoutRecommendationSongsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RecommendationsCreateWithoutFromUserInput = {
    createdAt?: Date | string
    toUser: UserCreateNestedOneWithoutReceivedRecommendationsInput
    recommendationSongs?: RecommendationSongsCreateNestedManyWithoutRecommendationInput
  }

  export type RecommendationsUncheckedCreateWithoutFromUserInput = {
    id?: number
    toUserId: number
    createdAt?: Date | string
    recommendationSongs?: RecommendationSongsUncheckedCreateNestedManyWithoutRecommendationInput
  }

  export type RecommendationsCreateOrConnectWithoutFromUserInput = {
    where: RecommendationsWhereUniqueInput
    create: XOR<RecommendationsCreateWithoutFromUserInput, RecommendationsUncheckedCreateWithoutFromUserInput>
  }

  export type RecommendationsCreateManyFromUserInputEnvelope = {
    data: RecommendationsCreateManyFromUserInput | RecommendationsCreateManyFromUserInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationsCreateWithoutToUserInput = {
    createdAt?: Date | string
    fromUser: UserCreateNestedOneWithoutSentRecommendationsInput
    recommendationSongs?: RecommendationSongsCreateNestedManyWithoutRecommendationInput
  }

  export type RecommendationsUncheckedCreateWithoutToUserInput = {
    id?: number
    fromUserId: number
    createdAt?: Date | string
    recommendationSongs?: RecommendationSongsUncheckedCreateNestedManyWithoutRecommendationInput
  }

  export type RecommendationsCreateOrConnectWithoutToUserInput = {
    where: RecommendationsWhereUniqueInput
    create: XOR<RecommendationsCreateWithoutToUserInput, RecommendationsUncheckedCreateWithoutToUserInput>
  }

  export type RecommendationsCreateManyToUserInputEnvelope = {
    data: RecommendationsCreateManyToUserInput | RecommendationsCreateManyToUserInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationsUpsertWithWhereUniqueWithoutFromUserInput = {
    where: RecommendationsWhereUniqueInput
    update: XOR<RecommendationsUpdateWithoutFromUserInput, RecommendationsUncheckedUpdateWithoutFromUserInput>
    create: XOR<RecommendationsCreateWithoutFromUserInput, RecommendationsUncheckedCreateWithoutFromUserInput>
  }

  export type RecommendationsUpdateWithWhereUniqueWithoutFromUserInput = {
    where: RecommendationsWhereUniqueInput
    data: XOR<RecommendationsUpdateWithoutFromUserInput, RecommendationsUncheckedUpdateWithoutFromUserInput>
  }

  export type RecommendationsUpdateManyWithWhereWithoutFromUserInput = {
    where: RecommendationsScalarWhereInput
    data: XOR<RecommendationsUpdateManyMutationInput, RecommendationsUncheckedUpdateManyWithoutFromUserInput>
  }

  export type RecommendationsScalarWhereInput = {
    AND?: RecommendationsScalarWhereInput | RecommendationsScalarWhereInput[]
    OR?: RecommendationsScalarWhereInput[]
    NOT?: RecommendationsScalarWhereInput | RecommendationsScalarWhereInput[]
    id?: IntFilter<"Recommendations"> | number
    fromUserId?: IntFilter<"Recommendations"> | number
    toUserId?: IntFilter<"Recommendations"> | number
    createdAt?: DateTimeFilter<"Recommendations"> | Date | string
  }

  export type RecommendationsUpsertWithWhereUniqueWithoutToUserInput = {
    where: RecommendationsWhereUniqueInput
    update: XOR<RecommendationsUpdateWithoutToUserInput, RecommendationsUncheckedUpdateWithoutToUserInput>
    create: XOR<RecommendationsCreateWithoutToUserInput, RecommendationsUncheckedCreateWithoutToUserInput>
  }

  export type RecommendationsUpdateWithWhereUniqueWithoutToUserInput = {
    where: RecommendationsWhereUniqueInput
    data: XOR<RecommendationsUpdateWithoutToUserInput, RecommendationsUncheckedUpdateWithoutToUserInput>
  }

  export type RecommendationsUpdateManyWithWhereWithoutToUserInput = {
    where: RecommendationsScalarWhereInput
    data: XOR<RecommendationsUpdateManyMutationInput, RecommendationsUncheckedUpdateManyWithoutToUserInput>
  }

  export type RecommendationSongsCreateWithoutSongInput = {
    createdAt?: Date | string
    recommendation: RecommendationsCreateNestedOneWithoutRecommendationSongsInput
  }

  export type RecommendationSongsUncheckedCreateWithoutSongInput = {
    id?: number
    recommendationId: number
    createdAt?: Date | string
  }

  export type RecommendationSongsCreateOrConnectWithoutSongInput = {
    where: RecommendationSongsWhereUniqueInput
    create: XOR<RecommendationSongsCreateWithoutSongInput, RecommendationSongsUncheckedCreateWithoutSongInput>
  }

  export type RecommendationSongsCreateManySongInputEnvelope = {
    data: RecommendationSongsCreateManySongInput | RecommendationSongsCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationSongsUpsertWithWhereUniqueWithoutSongInput = {
    where: RecommendationSongsWhereUniqueInput
    update: XOR<RecommendationSongsUpdateWithoutSongInput, RecommendationSongsUncheckedUpdateWithoutSongInput>
    create: XOR<RecommendationSongsCreateWithoutSongInput, RecommendationSongsUncheckedCreateWithoutSongInput>
  }

  export type RecommendationSongsUpdateWithWhereUniqueWithoutSongInput = {
    where: RecommendationSongsWhereUniqueInput
    data: XOR<RecommendationSongsUpdateWithoutSongInput, RecommendationSongsUncheckedUpdateWithoutSongInput>
  }

  export type RecommendationSongsUpdateManyWithWhereWithoutSongInput = {
    where: RecommendationSongsScalarWhereInput
    data: XOR<RecommendationSongsUpdateManyMutationInput, RecommendationSongsUncheckedUpdateManyWithoutSongInput>
  }

  export type RecommendationSongsScalarWhereInput = {
    AND?: RecommendationSongsScalarWhereInput | RecommendationSongsScalarWhereInput[]
    OR?: RecommendationSongsScalarWhereInput[]
    NOT?: RecommendationSongsScalarWhereInput | RecommendationSongsScalarWhereInput[]
    id?: IntFilter<"RecommendationSongs"> | number
    recommendationId?: IntFilter<"RecommendationSongs"> | number
    songId?: IntFilter<"RecommendationSongs"> | number
    createdAt?: DateTimeFilter<"RecommendationSongs"> | Date | string
  }

  export type UserCreateWithoutSentRecommendationsInput = {
    email: string
    name: string
    createdAt?: Date | string
    receivedRecommendations?: RecommendationsCreateNestedManyWithoutToUserInput
  }

  export type UserUncheckedCreateWithoutSentRecommendationsInput = {
    id?: number
    email: string
    name: string
    createdAt?: Date | string
    receivedRecommendations?: RecommendationsUncheckedCreateNestedManyWithoutToUserInput
  }

  export type UserCreateOrConnectWithoutSentRecommendationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentRecommendationsInput, UserUncheckedCreateWithoutSentRecommendationsInput>
  }

  export type UserCreateWithoutReceivedRecommendationsInput = {
    email: string
    name: string
    createdAt?: Date | string
    sentRecommendations?: RecommendationsCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateWithoutReceivedRecommendationsInput = {
    id?: number
    email: string
    name: string
    createdAt?: Date | string
    sentRecommendations?: RecommendationsUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserCreateOrConnectWithoutReceivedRecommendationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedRecommendationsInput, UserUncheckedCreateWithoutReceivedRecommendationsInput>
  }

  export type RecommendationSongsCreateWithoutRecommendationInput = {
    createdAt?: Date | string
    song: SongCreateNestedOneWithoutRecommendationSongsInput
  }

  export type RecommendationSongsUncheckedCreateWithoutRecommendationInput = {
    id?: number
    songId: number
    createdAt?: Date | string
  }

  export type RecommendationSongsCreateOrConnectWithoutRecommendationInput = {
    where: RecommendationSongsWhereUniqueInput
    create: XOR<RecommendationSongsCreateWithoutRecommendationInput, RecommendationSongsUncheckedCreateWithoutRecommendationInput>
  }

  export type RecommendationSongsCreateManyRecommendationInputEnvelope = {
    data: RecommendationSongsCreateManyRecommendationInput | RecommendationSongsCreateManyRecommendationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSentRecommendationsInput = {
    update: XOR<UserUpdateWithoutSentRecommendationsInput, UserUncheckedUpdateWithoutSentRecommendationsInput>
    create: XOR<UserCreateWithoutSentRecommendationsInput, UserUncheckedCreateWithoutSentRecommendationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentRecommendationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentRecommendationsInput, UserUncheckedUpdateWithoutSentRecommendationsInput>
  }

  export type UserUpdateWithoutSentRecommendationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedRecommendations?: RecommendationsUpdateManyWithoutToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentRecommendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedRecommendations?: RecommendationsUncheckedUpdateManyWithoutToUserNestedInput
  }

  export type UserUpsertWithoutReceivedRecommendationsInput = {
    update: XOR<UserUpdateWithoutReceivedRecommendationsInput, UserUncheckedUpdateWithoutReceivedRecommendationsInput>
    create: XOR<UserCreateWithoutReceivedRecommendationsInput, UserUncheckedCreateWithoutReceivedRecommendationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedRecommendationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedRecommendationsInput, UserUncheckedUpdateWithoutReceivedRecommendationsInput>
  }

  export type UserUpdateWithoutReceivedRecommendationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentRecommendations?: RecommendationsUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedRecommendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentRecommendations?: RecommendationsUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type RecommendationSongsUpsertWithWhereUniqueWithoutRecommendationInput = {
    where: RecommendationSongsWhereUniqueInput
    update: XOR<RecommendationSongsUpdateWithoutRecommendationInput, RecommendationSongsUncheckedUpdateWithoutRecommendationInput>
    create: XOR<RecommendationSongsCreateWithoutRecommendationInput, RecommendationSongsUncheckedCreateWithoutRecommendationInput>
  }

  export type RecommendationSongsUpdateWithWhereUniqueWithoutRecommendationInput = {
    where: RecommendationSongsWhereUniqueInput
    data: XOR<RecommendationSongsUpdateWithoutRecommendationInput, RecommendationSongsUncheckedUpdateWithoutRecommendationInput>
  }

  export type RecommendationSongsUpdateManyWithWhereWithoutRecommendationInput = {
    where: RecommendationSongsScalarWhereInput
    data: XOR<RecommendationSongsUpdateManyMutationInput, RecommendationSongsUncheckedUpdateManyWithoutRecommendationInput>
  }

  export type RecommendationsCreateWithoutRecommendationSongsInput = {
    createdAt?: Date | string
    fromUser: UserCreateNestedOneWithoutSentRecommendationsInput
    toUser: UserCreateNestedOneWithoutReceivedRecommendationsInput
  }

  export type RecommendationsUncheckedCreateWithoutRecommendationSongsInput = {
    id?: number
    fromUserId: number
    toUserId: number
    createdAt?: Date | string
  }

  export type RecommendationsCreateOrConnectWithoutRecommendationSongsInput = {
    where: RecommendationsWhereUniqueInput
    create: XOR<RecommendationsCreateWithoutRecommendationSongsInput, RecommendationsUncheckedCreateWithoutRecommendationSongsInput>
  }

  export type SongCreateWithoutRecommendationSongsInput = {
    title: string
    artist: string
    genre: string
  }

  export type SongUncheckedCreateWithoutRecommendationSongsInput = {
    id?: number
    title: string
    artist: string
    genre: string
  }

  export type SongCreateOrConnectWithoutRecommendationSongsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutRecommendationSongsInput, SongUncheckedCreateWithoutRecommendationSongsInput>
  }

  export type RecommendationsUpsertWithoutRecommendationSongsInput = {
    update: XOR<RecommendationsUpdateWithoutRecommendationSongsInput, RecommendationsUncheckedUpdateWithoutRecommendationSongsInput>
    create: XOR<RecommendationsCreateWithoutRecommendationSongsInput, RecommendationsUncheckedCreateWithoutRecommendationSongsInput>
    where?: RecommendationsWhereInput
  }

  export type RecommendationsUpdateToOneWithWhereWithoutRecommendationSongsInput = {
    where?: RecommendationsWhereInput
    data: XOR<RecommendationsUpdateWithoutRecommendationSongsInput, RecommendationsUncheckedUpdateWithoutRecommendationSongsInput>
  }

  export type RecommendationsUpdateWithoutRecommendationSongsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutSentRecommendationsNestedInput
    toUser?: UserUpdateOneRequiredWithoutReceivedRecommendationsNestedInput
  }

  export type RecommendationsUncheckedUpdateWithoutRecommendationSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUpsertWithoutRecommendationSongsInput = {
    update: XOR<SongUpdateWithoutRecommendationSongsInput, SongUncheckedUpdateWithoutRecommendationSongsInput>
    create: XOR<SongCreateWithoutRecommendationSongsInput, SongUncheckedCreateWithoutRecommendationSongsInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutRecommendationSongsInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutRecommendationSongsInput, SongUncheckedUpdateWithoutRecommendationSongsInput>
  }

  export type SongUpdateWithoutRecommendationSongsInput = {
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
  }

  export type SongUncheckedUpdateWithoutRecommendationSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
  }

  export type RecommendationsCreateManyFromUserInput = {
    id?: number
    toUserId: number
    createdAt?: Date | string
  }

  export type RecommendationsCreateManyToUserInput = {
    id?: number
    fromUserId: number
    createdAt?: Date | string
  }

  export type RecommendationsUpdateWithoutFromUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toUser?: UserUpdateOneRequiredWithoutReceivedRecommendationsNestedInput
    recommendationSongs?: RecommendationSongsUpdateManyWithoutRecommendationNestedInput
  }

  export type RecommendationsUncheckedUpdateWithoutFromUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendationSongs?: RecommendationSongsUncheckedUpdateManyWithoutRecommendationNestedInput
  }

  export type RecommendationsUncheckedUpdateManyWithoutFromUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationsUpdateWithoutToUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutSentRecommendationsNestedInput
    recommendationSongs?: RecommendationSongsUpdateManyWithoutRecommendationNestedInput
  }

  export type RecommendationsUncheckedUpdateWithoutToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendationSongs?: RecommendationSongsUncheckedUpdateManyWithoutRecommendationNestedInput
  }

  export type RecommendationsUncheckedUpdateManyWithoutToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationSongsCreateManySongInput = {
    id?: number
    recommendationId: number
    createdAt?: Date | string
  }

  export type RecommendationSongsUpdateWithoutSongInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendation?: RecommendationsUpdateOneRequiredWithoutRecommendationSongsNestedInput
  }

  export type RecommendationSongsUncheckedUpdateWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    recommendationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationSongsUncheckedUpdateManyWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    recommendationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationSongsCreateManyRecommendationInput = {
    id?: number
    songId: number
    createdAt?: Date | string
  }

  export type RecommendationSongsUpdateWithoutRecommendationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutRecommendationSongsNestedInput
  }

  export type RecommendationSongsUncheckedUpdateWithoutRecommendationInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationSongsUncheckedUpdateManyWithoutRecommendationInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}