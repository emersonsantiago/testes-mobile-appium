const { default: $ } = require("webdriverio/build/commands/browser/$");

describe('Teste - exercício', () => {

    it('Preencher formulario', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('teste exercício ebac')
        expect(await $('~text-input')).toBeDisplayed()


    });
    
});