import { Publisher } from './publisher'

function printPublisher(publisher: Publisher): void {

    console.log(publisher.location);
    console.log(publisher.name);
    console.log(publisher.phNumber);

}

printPublisher({ name: "Author1", phNumber: 9629880801 });