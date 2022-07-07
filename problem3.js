function area_equi_triangle(side)
    {
        return (((Math.sqrt(3)) / 4) * side * side).toFixed(2);
    }
    var side = 20;
    console.log("Area of Equilateral Triangle:");
    console.log(area_equi_triangle(side)+"\n");
