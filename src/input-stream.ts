/*
import {Buffer} from 'buffer';
import {Stream} from 'stream';
import * as BufferStreams from 'bufferstreams';
import * as through from 'through2';

export class InputStream {
	transform(file, _, cb) {
		var context = this,
			wasBuffer = false;

		if (isBuffer(file)) {
			file = { contents: file };
			wasBuffer = true;
		}

		if (isNull(file && file.contents || null)) {
			cb(null, file);
			return;
		}

		if (isStream(file.contents)) {
			file.contents = file.contents.pipe(new BufferStreams(function(_, buffer, done) {
				try {
					const output = context.processContent(buffer);

					done(null, contents);
					context.push(wasBuffer ? file.contents : file);
					cb();
				} catch (error) {
					context.emit('error', error);
					done(error);
				}
			}));
			return;
		}

		processContent(file.contents, function(err, contents) {
			process.nextTick(function() {
				if (err) {
					self.emit('error', err);
				} else {
					file.contents = contents;
					self.push(wasBuffer ? file.contents : file);
				}
				cb();
			});
		});
	}

	processContent(content) {

	}

	run() {
		return through.obj(function(...args) { this.transform(...args); });
	}
};


function isBuffer(o) {
	return typeof o === 'object' && o instanceof Buffer;
}

function isNull(o) {
	return o === null;
}

function isStream(o) {
	return !!o && o instanceof Stream;
}*/