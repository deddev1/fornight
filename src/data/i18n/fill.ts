/** Replace `{token}` placeholders in chrome strings. `$` before `{price}` stays literal. */
export function fillChrome(template: string, vars: Record<string, string | number>): string {
	return template.replace(/\{(\w+)\}/g, (match, key: string) =>
		Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : match,
	);
}
