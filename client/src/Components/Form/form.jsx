

export default function Form() {


    return (
        <div>
            <form>
                <div>
                    <label> Name: </label>
                    <input
                        name="activity"
                        type="text"
                        autoComplete="off"
                        placeholder="Write the activity's name"
                    />
                </div>

                <div>
                    <label> Difficulty: </label>
                    <label for="1">1</label>
                    <input type="radio" id="1" name="drone" value="1" checked />
                    <label for="2">2</label>
                    <input type="radio" id="2" name="drone" value="2" checked />
                    <label for="3">3</label>
                    <input type="radio" id="3" name="drone" value="3" checked />
                    <label for="4">4</label>
                    <input type="radio" id="4" name="drone" value="4" checked />
                    <label for="5">5</label>
                    <input type="radio" id="5" name="drone" value="5" checked />
                </div>

                <div>
                    <label> Duration: </label>
                </div>

                <div>
                    <label>Season: </label>
                    <select>
                        <option>--</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                    </select>
                </div>
            </form>
        </div>
    );
};