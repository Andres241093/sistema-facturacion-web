import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

	transform(originalString: string, maxSize: string): any {
		const limit = parseInt (maxSize, 10);
		const firstCutting = originalString.substr(0, limit);
		let lastCutting: string;
		let lastBlank: number;
		if (firstCutting.length < originalString.length) {
			//lastBlank = firstCutting.lastIndexOf(' ');
			//lastCutting = originalString.substr(0, lastBlank);
			//lastCutting = lastCutting + '...';
			lastCutting = firstCutting + '...';
		} else {
			lastCutting = originalString;
			lastBlank = 0;
		}
		return lastCutting;
	}

}
