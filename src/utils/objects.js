class Objects {
    static findObjectByProperty(data, prop, value) {
        for (var i = 0; i < data.length; i++) {
            if (data[i][prop] === value) {
                return data[i];
            }
        }

        return false;
    };

    static merge(obj1, obj2) {
        for (var p in obj2) {
            try {
                if (obj2[p].constructor === Object) {
                    obj1[p] = this.merge(obj1[p], obj2[p]);
                } 
                else {
                    obj1[p] = obj2[p];
                }
            }
            catch (e) {
                obj1[p] = obj2[p];
            }
        }

        return obj1;
    };
};

export default Objects;
