export default function uuid(): string {
    return Number(String(Date.now() + Math.random()).replace(".", "")).toString(36)
}