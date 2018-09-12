import { TestWindow } from '@stencil/core/testing';
import { UIHeadingComponent } from './heading';

describe('ui-heading', () => {

    it('should build', () => {
        expect(new UIHeadingComponent()).toBeTruthy();
    });

    let testWindow;

    beforeEach(() => {
        testWindow = new TestWindow();
    });

    describe('rendering', () => {

        it('should render the text in the slot', async () => {
            const element = await testWindow.load({
                components: [UIHeadingComponent],
                html: '<ui-heading>Hello World</ui-heading>'
            }) as HTMLHeadingElement;
            await testWindow.flush();
            expect(element.textContent.trim()).toEqual('Hello World');
        });

        it('should apply xlarge class when xlarge is passed as an attribute', async () => {
            const element = await testWindow.load({
                components: [UIHeadingComponent],
                html: '<ui-heading xlarge></ui-heading>'
            }) as HTMLHeadingElement;
            await testWindow.flush();
            expect(element.querySelector('span').className).toEqual('xlarge');
        });

        it('should apply large class when large is passed as an attribute', async () => {
            const element = await testWindow.load({
                components: [UIHeadingComponent],
                html: '<ui-heading large></ui-heading>'
            }) as HTMLHeadingElement;
            await testWindow.flush();
            expect(element.querySelector('span').className).toEqual('large');
        });

        it('should apply regular class when no sizing attribute is set', async () => {
            const element = await testWindow.load({
                components: [UIHeadingComponent],
                html: '<ui-heading></ui-heading>'
            }) as HTMLHeadingElement;
            await testWindow.flush();
            expect(element.querySelector('span').className).toEqual('regular');
        });

        it('should apply small class when small is passed as an attribute', async () => {
            const element = await testWindow.load({
                components: [UIHeadingComponent],
                html: '<ui-heading small></ui-heading>'
            }) as HTMLHeadingElement;
            await testWindow.flush();
            expect(element.querySelector('span').className).toEqual('small');
        });

        it('should apply xsmall class when xsmall is passed as an attribute', async () => {
            const element = await testWindow.load({
                components: [UIHeadingComponent],
                html: '<ui-heading xsmall></ui-heading>'
            }) as HTMLHeadingElement;
            await testWindow.flush();
            expect(element.querySelector('span').className).toEqual('xsmall');
        });

    });

});
