// Vehicle 클래스 - 차량을 나타내는 클래스입니다.
class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    // 초기 위치를 나타내는 벡터를 생성합니다.
    this.pos = createVector(x, y);
    // 무작위 방향으로 초기 속도 벡터를 생성합니다.
    this.vel = p5.Vector.random2D();
    // 가속도 벡터를 생성합니다.
    this.acc = createVector();
    // 차량의 질량을 지정합니다.
    this.mass = mass;
    // 차량의 반경을 지정합니다.
    this.rad = rad;
    // 최대 속도를 지정합니다.
    this.speedMx = speedMx;
    // 최대 힘을 지정합니다.
    this.forceMx = forceMx;
    // 차량 이웃 범위 반경을 설정합니다.
    this.neighborhooodRad = 50;
    // 차량의 색상을 지정합니다.
    this.color = color;
  }

  // 다른 차량과의 인접성을 유지하는 행동을 구현한 함수인 cohesion을 정의합니다.
  cohesion(others) {
    // 관련 차량 수와 조절력 벡터를 초기화합니다.
    let cnt = 0;
    const steer = createVector(0, 0);
    // 모든 다른 차량에 대해 반복합니다.
    others.forEach((each) => {
      if (each !== this) {
        // 현재 차량과 다른 차량 사이의 거리 제곱을 계산합니다.
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 만약 거리가 이웃 범위 이내라면 조절력 벡터에 다른 차량의 위치를 더합니다.
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.pos);
          cnt++;
        }
      }
    });
    // 이웃 차량이 존재하면 조절력 벡터를 계산하고 반환합니다.
    if (cnt > 0) {
      steer.div(cnt);
      steer.sub(this.pos);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  // 다른 차량과의 일치된 방향을 유지하는 행동을 구현한 함수인 align을 정의합니다.
  align(others) {
    // 관련 차량 수와 조절력 벡터를 초기화합니다.
    let cnt = 0;
    const steer = createVector(0, 0);
    // 모든 다른 차량에 대해 반복합니다.
    others.forEach((each) => {
      if (each !== this) {
        // 현재 차량과 다른 차량 사이의 거리 제곱을 계산합니다.
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 만약 거리가 이웃 범위 이내라면 조절력 벡터에 다른 차량의 속도를 더합니다.
        steer.add(each.vel);
        cnt++;
      }
    });
    // 이웃 차량이 존재하면 조절력 벡터를 계산하고 반환합니다.
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  // 다른 차량과의 격리를 유지하는 행동을 구현한 함수인 separate을 정의합니다.
  separate(others) {
    // 관련 차량 수와 조절력 벡터를 초기화합니다.
    let cnt = 0;
    const steer = createVector(0, 0);
    // 모든 다른 차량에 대해 반복합니다.
    others.forEach((each) => {
      if (each !== this) {
        // 현재 차량과 다른 차량 사이의 거리를 계산합니다.
        const dist = this.pos.dist(each.pos);
        // 만약 거리가 0보다 크고 두 차량의 반경 합보다 작다면 조절력을 추가합니다.
        if (dist > 0 && this.rad + each.rad > dist) {
          const distNormal = dist / (this.rad + each.rad);
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          towardMeVec.setMag(1 / distNormal);
          steer.add(towardMeVec);
          cnt++;
        }
      }
    });
    // 이웃 차량이 존재하면 조절력 벡터를 계산하고 반환합니다.
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  }

  // 힘을 차량에 적용하는 함수를 정의합니다.
  applyForce(force) {
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDivedByMass);
  }

  // 차량의 상태를 업데이트하는 함수를 정의합니다.
  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  // 차량이 화면 경계를 벗어나지 않도록 하는 함수를 정의합니다.
  borderInfinite() {
    if (this.pos.x < -infiniteOffset) {
      this.pos.x = width + infiniteOffset;
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset;
    }
    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset;
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset;
    }
  }
}
