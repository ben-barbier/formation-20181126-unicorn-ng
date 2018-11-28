import {TestBed} from '@angular/core/testing';

import {MagicService} from './magic.service';

fdescribe('MagicService', () => {

    let service: MagicService;
    beforeEach(() => { TestBed.configureTestingModule({ providers: [MagicService] }); });
    beforeEach(() => service = TestBed.get(MagicService));

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should enchant name', () => {
// Given
        const cases: any[] = [
            {originalName: 'Rainbow', expectedEnchantedName: '🦄RaInBoW'},
            {originalName: 'RAINBOW', expectedEnchantedName: '🦄RaInBoW'},
            {originalName: 'rainbow', expectedEnchantedName: '🦄RaInBoW'},
            {originalName: '',        expectedEnchantedName: '🦄'},
            {originalName: null,      expectedEnchantedName: '🦄'},
            {originalName: undefined, expectedEnchantedName: '🦄'},
        ];

        // When
        cases.map(c => c.enchantedName = service.enchant(c.originalName));

        // Then
        cases.forEach(c => {
            expect(c.enchantedName).toEqual(c.expectedEnchantedName);
        });

    })

});
