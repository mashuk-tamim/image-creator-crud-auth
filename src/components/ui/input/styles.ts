export const clickedFocusVisible =
	"focus-visible:ring-0 focus-visible:border-info-9 focus-visible:shadow-info-light dark:focus-visible:shadow-info-dark";
export const clickedFocusWithin =
	"focus-within:ring-0 focus-within:border-info-9 focus-within:shadow-info-light dark:focus-within:shadow-info-dark";

// variants
export const success =
	"shadow-success-light dark:shadow-success-dark focus-visible:shadow-success-light dark:focus-visible:shadow-success-dark focus-visible:ring-0 focus-visible:border-success-9 border-success-9";
export const error =
	"shadow-danger-light dark:shadow-danger-dark focus-visible:shadow-danger-light dark:focus-visible:shadow-danger-dark focus-visible:ring-0 focus-visible:border-danger-9 border-danger-9";
export const warning =
	"shadow-warning-light dark:shadow-warning-dark focus-visible:shadow-warning-light dark:focus-visible:shadow-warning-dark focus-visible:ring-0 focus-visible:border-warning-11 border-warning-11";
export const def = "";

export const field = [
	"px-3 py-2 rounded-lg",
	"text-sm font-normal placeholder:text-gray-11",
	"border border-gray-7",
	"bg-background dark:bg-gray-2",
	"appaerance-none outline-none",
	// ring shadow
	"focus-visible:border-info-9 focus-within:border-info-9",
	"focus-visible:ring-1 focus-visible:ring-info-9 ", // for field
	"focus-within:ring-1 focus-within:ring-info-9", // for field group
	// disabled
	"disabled:cursor-not-allowed disabled:bg-gray-3 disabled:text-gray-9 disabled:placeholder:text-gray-8 disabled:border-gray-7",
	// transition
	"transition-shadow duration-100 ease-in-out",
];
