export interface Idataloader<K, V> {
    load(id: K): Promise<V>;
}
