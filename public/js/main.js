requirejs.config({
    baseUrl: 'public/js',
    paths: {
        'SwingChordsApp':'app'
    }
});

requirejs(['SwingChordsApp'], function(MyApp) {
    new MyApp.SwingChordsApp();
});