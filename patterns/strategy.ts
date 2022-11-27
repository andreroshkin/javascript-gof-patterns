interface SortStrategy {
    sort(dataset: number[]): number[];
}

class BubbleSortStrategy implements SortStrategy {
    public sort(dataset: number[]): number[] {
        console.log("Sorting using bubble sort");
        return dataset;
    }
}

class QuickSortStrategy implements SortStrategy {
    public sort(dataset: number[]): number[] {
        console.log("Sorting using quick sort");
        return dataset;
    }
}

class Sorter {
    protected sorter;

    constructor(sorter: SortStrategy) {
        this.sorter = sorter;
    }

    public sort(dataset: number[]): number[] {
        return this.sorter.sort(dataset);
    }
}

const dataset = [1, 5, 4, 3, 2, 8];
let sorter = new Sorter(new BubbleSortStrategy());
sorter.sort(dataset);

sorter = new Sorter(new QuickSortStrategy());
sorter.sort(dataset);
