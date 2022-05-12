default: tsc rollup

tsc:
	@ echo "Transpiling typescript..."
	@ cd src/preview_tools && tsc
	@ cd src/register_user && tsc

rollup: tsc
	@ echo "Compiling for web..."
	@ rollup src/register_user/dist/index.js \
		--file register_user.js \
		--format iife && \
		rm -rf src/register_user/dist

	@ rollup src/preview_tools/dist/index.js \
		--file preview_tools.js \
		--format iife && \
		rm -rf src/preview_tools/dist

requirements: 
	npm install -g typescript rollup