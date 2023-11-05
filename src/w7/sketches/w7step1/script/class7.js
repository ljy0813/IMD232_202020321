class Traffic {
  constructor() {
    this.vehicles = [];
  }
  // 객체들을 저장할 배열을 만든다
  run() {
    // 모든 객체에 대해 아래 작업을 반복한다
    this.vehicles.forEach((eachVehicle) => {
      // 객체끼리의 거리를 계산해서 떨어지도록 만든다
      const separate = eachVehicle.separate(this.vehicles);
      separate.mult(1); // 이것을 1배로 강하게 적용한다
      eachVehicle.applyForce(separate); // 객체끼리 방향을 맞춰 같은 방향으로 가도록 도와준다
      const align = eachVehicle.align(this.vehicles);
      align.mult(0.5); // 이것을 반만큼만 적용한다
      eachVehicle.applyForce(align); // 객체끼리 가까워지도록 도와준다
      const cohesion = eachVehicle.cohesion(this.vehicles);
      cohesion.mult(0.5); // 이것을 반만큼만 적용한다
      eachVehicle.applyForce(cohesion); // 객체를 업데이트합니다 (움직이도록 만듭니다).
      eachVehicle.update(); // 만약 객체가 화면 밖으로 나가면, 반대편으로 나오도록 도와준다
      eachVehicle.borderInfinite(); // 객체를 화면에 그립니다.
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    // 새로운 객체를 만들어서 배열에 추가한다
    const mass = 1;
    // 객체의 질량을 1로 설정한다
    this.vehicles.push(
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
    );
  }
}
