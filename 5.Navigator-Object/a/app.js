function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName;
    let browserVersion;
   
    if (userAgent.indexOf('Firefox') > -1) {
		browserName = 'Mozilla Firefox';
		browserVersion = userAgent.match(/Firefox\/(\d+)/)[1];
    } else if (userAgent.indexOf('Chrome') > -1) {
		browserName = 'Google Chrome';
		browserVersion = userAgent.match(/Chrome\/(\d+)/)[1];
    } else if (userAgent.indexOf('Safari') > -1) {
		browserName = 'Apple Safari';
		browserVersion = userAgent.match(/Version\/(\d+)/)[1];
    } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
		browserName = 'Opera';
		browserVersion = userAgent.match(/(?:Opera|OPR)\/(\d+)/)[1];
    } else if (userAgent.indexOf('Edge') > -1) {
		browserName = 'Microsoft Edge';
		browserVersion = userAgent.match(/Edge\/(\d+)/)[1];
    } else if (userAgent.indexOf('Trident') > -1) {
		browserName = 'Internet Explorer';
		const rvIndex = userAgent.indexOf('rv:');
		browserVersion = userAgent.substring(rvIndex + 3, userAgent.indexOf('.', rvIndex));
    } else {
		browserName = 'Unknown';
		browserVersion = 'Unknown';
    }
   
    return {
		name: browserName,
		version: browserVersion
    };
    }


