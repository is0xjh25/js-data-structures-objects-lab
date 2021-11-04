let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
	return Object.assign({}, driver, {[key]:value});
}

function deleteFromDriverByKey(driver, key) {
	const copy = {...driver};
	delete copy[key];
	return copy;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
	driver[key] = value
	return driver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
	delete driver[key];
	return driver;
}
