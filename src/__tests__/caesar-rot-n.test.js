import caesar  from '../js/caesar'

describe('ROT-N', () => {

	/* Na początek przypomnijmy sobie styl pisania Given When Then */

	it('should cipher a letter move its order by N', () => {
		// Given
		const word = 'abc';
		// When
		const encryption = caesar(word, 20);
		// Then
		expect(encryption).toEqual('uvw');
	})

	/*
	* Biorąc pod uwagę sytuację z wieloma typami ROT.
	* Możemy wyciągnąć kilka z nich, bez szczególnego znaczenia które,
	* ja dałem 0,4,15,18,20,22,23,25,26
	*
	* Nie ma sensu brać pod uwagę wszystkich, można podnieść klika losowo.
	* Dlaczego ?
	*
	* Ponieważ daje nam to dużo przypadków (cała ta eksplozja kombinatoryczna)
	* Lepiej jest wyciągnąć te brzegowe.
	* W Twoim przypadku brzegami będzie rot0 i rot26 oraz najlepsze co można zrobić
	* czyli moment w którym następuje "przeskok" między "x" - "y" - "z"  a potem "a"
	*
	* Tutaj po prostu ciężko jest mówić o "edge cases". Jeśli już - to właśnie chyba
	* ten moment warto testować. Dlatego wszystkie moje /then/ to moment "przejścia" w alfabecie
	* z w-x-y-z-a-b
	*
	* */

	/*
	* U Ciebie fajnie jest do tego użyć "describe.each"
	* Pamiętając że w tablicy którą przekazujemy - musimy poniekąd zachować styl:
	* given - when - then
	*
	* Idąc tym tropem, na pewno bez większych problemów zrozumiesz co się dzieje poniżej.
	* */
	describe.each([
		/* [ Given, When, Then ] */
		[0, 'WwXxYyZzAaBb', 'WwXxYyZzAaBb'],
		[4, 'SsTtUuVvWwXx', 'WwXxYyZzAaBb'],
		[15, 'HhIiJjKkLlMm', 'WwXxYyZzAaBb'],
		[18, 'EeFfGgHhIiJj', 'WwXxYyZzAaBb'],
		[20, 'CcDdEeFfGgHh', 'WwXxYyZzAaBb'],
		[22, 'AaBbCcDdEeFf', 'WwXxYyZzAaBb'],
		[23, 'ZzAaBbCcDdEe', 'WwXxYyZzAaBb'],
		[25, 'XxYyZzAaBbCc', 'WwXxYyZzAaBb'],
		[26, 'WwXxYyZzAaBb', 'WwXxYyZzAaBb'],
	])('encoding word ROT-%i-(%s)', (rot, word, expected) => {

		it(`should return ${expected}`, () => {
			const encoded = caesar(word, rot);

			expect(encoded).toBe(expected);
		});
	});

	/*
	* Kolejnym Ciekawym "AUTOMATEM" do testowania będzie całość alfabetu + funkcja slice.
	*
	* Daje to tutaj jako ciekawostka, ponieważ ten test "raczej nic nowego nie wnosi"
	* */
	describe('with whole alphabet', () => {
		const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
		const UPPER_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

		// Tutaj robisz automat do sprawdzania przesunięcia:
		const movedBy = (by = 0, word = '') => word.slice(by) + word.slice(0, by);

		it('should make proper move-by for ROT2', () => {
			const ROT2 = 2;

			const encoded = caesar(ALPHABET, ROT2);
			const upperEncoded = caesar(UPPER_ALPHABET, ROT2);

			expect(encoded).toBe(movedBy(ROT2, ALPHABET));
			expect(upperEncoded).toBe(movedBy(ROT2, UPPER_ALPHABET));
		})

		/*
		* Jeśli chcesz poćwiczyć rozumienie describe.each, napisz tutaj taką formę
		* Czyli to co widzisz wyżej (ze slice) dla kilku przypadków
		* Wybierz jednak ROTy których jeszcze "nie testowaliśmy" czyli np.
		* 5, 8, 10, 12
		* */

	})

})
