export function ansiToDiscord(text: string): string {
    return text.replace(/\x1B\[(?:39|22)m/g, "\x1B[0m");
}
