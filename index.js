import styles from './styles.scss';
// sometimes this works
//import thing from './facade';
//import { that } from './facade';
// and sometimes you have to do this
import thing from './facade/facade';
import { that } from './facade/facade';

console.log(`js. The ${thing} is, I am ${that} guy!`);

console.log('thing', thing);
console.log('that', that);

if (typeof document !== 'undefined') {
	document.write('saying hello from PARCEL packager ' + thing + ' ' + that);
}
console.log('saying hello from PARCEL packager', styles);
