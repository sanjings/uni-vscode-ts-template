declare type Nullable<T> = T | null;
declare type Recordable<T = any> = Record<string, T>;
declare type ReadonlyRecordable<T = any> = Readonly<Record<string, T>>;

declare type TimeoutHandle = ReturnType<typeof setTimeout>;
declare type IntervalHandle = ReturnType<typeof setInterval>;

declare type RequireKey<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: T[P] };
