const company = {
    count: 0,
    employees: ['bob', 'kim', 'wolf',],
    wolfNext() {
        company.count; //?
        this.employees[this.count]; //?
        if (this.count >= this.employees.length) {
            return { value: this.employees[this.count], count: this.count, done: true };
        }
        const temp = { value: this.employees[this.count], count: this.count, done: false };
        this.count++;
        return temp;
    },
};
// company.wolfNext(); //?
// company.wolfNext(); //?
// company.wolfNext(); //?
// company.wolfNext(); //?
let kimbo = company.wolfNext();
while (!kimbo.done) {
    kimbo; //?
    kimbo = company.wolfNext();
}
const temp2 = 'temp2';
export { temp2 };
