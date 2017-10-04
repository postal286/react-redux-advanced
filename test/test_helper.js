import jsdom from 'jsdom'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
